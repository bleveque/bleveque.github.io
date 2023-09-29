const CHAR_GRADIENT = [
  '#',
  'm',
  'o',
  '\u2022',
  '\u2218',
  '\u00b7',
  '.',
  ' '
];

class ImageConverter {
  constructor(characterWidth = 1, characterHeight = 2, verticalCharPadding = 0) {
    this.charWidth = characterWidth; // width of a single character
    this.charHeight = characterHeight; // height of a single character
    this.verticalCharPadding = verticalCharPadding; // padding around a block of text
  }

  setCharDimensions(w, h, p) {
    this.charWidth = w;
    this.charHeight = h;
    this.verticalCharPadding = p;
  }

  convolveKernel(outRgba, inRgba, width, height, kernel, kernelWidth) {
    const kernelHeight = kernel.length / kernelWidth;
    const kernelHalfWidth = (kernelWidth - 1) / 2;
    const kernelHalfHeight = (kernelHeight - 1) / 2;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let rsum = 0;
        let gsum = 0;
        let bsum = 0;
        for (let dy = -kernelHalfHeight; dy <= kernelHalfHeight; dy++) {
          for (let dx = -kernelHalfWidth; dx <= kernelHalfWidth; dx++) {
            const xIdx = Math.min(width - 1, Math.max(0, x + dx));
            const yIdx = Math.min(height - 1, Math.max(0, y + dy));
            const offset = width * yIdx + xIdx;

            const r = inRgba[4 * offset];
            const g = inRgba[4 * offset + 1];
            const b = inRgba[4 * offset + 2];

            const kernelIdx = (dy + kernelHalfHeight) * kernelWidth + (dx + kernelHalfWidth);
            rsum += r * kernel[kernelIdx];
            gsum += g * kernel[kernelIdx];
            bsum += b * kernel[kernelIdx];
          }
        }
        const outOffset = width * y + x;
        outRgba[4 * outOffset] = rsum;
        outRgba[4 * outOffset + 1] = gsum;
        outRgba[4 * outOffset + 2] = bsum;
      }
    }
  }

  forEachPixel(inRgba, width, height, fn) {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = 4 * (width * y + x); // index into inRgba
        const r = inRgba[idx];
        const g = inRgba[idx + 1];
        const b = inRgba[idx + 2];
        const a = inRgba[idx + 3];
        fn(r, g, b, a, idx);
      }
    }
  }

  invert(outRgba, inRgba, width, height) {
    this.forEachPixel(inRgba, width, height, (r, g, b, a, idx) => {
      outRgba[idx] = 255 - outRgba[idx];
      outRgba[idx + 1] = 255 - outRgba[idx + 1];
      outRgba[idx + 2] = 255 - outRgba[idx + 2];
    });
  }

  grayscale(outRgba, imageData) {
    this.forEachPixel(imageData.data, imageData.width, imageData.height, (r, g, b, a, idx) => {
      const intensity = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      outRgba[idx] = intensity;
      outRgba[idx + 1] = intensity;
      outRgba[idx + 2] = intensity;
      outRgba[idx + 3] = a;
    });
  }

  edgeDetection(outRgba, imageData) {
    const grayscaleImage = new Array(imageData.data.length);
    this.grayscale(grayscaleImage, imageData);

    const sobelHoriz = [
      -1, 0, 1,
      -2, 0, 2,
      -1, 0, 1
    ];
    const scharrHoriz = [
      3, 0, -3,
      10, 0, -10,
      3, 0, -3
    ];
    const horizConvolved = new Array(imageData.data.length);
    this.convolveKernel(horizConvolved, grayscaleImage, imageData.width, imageData.height, sobelHoriz, 3);

    const sobelVert = [
      -1, -2, -1,
      0, 0, 0,
      1, 2, 1
    ];
    const scharrVert = [
      3, 10, 3,
      0, 0, 0,
      -3, -10, -3
    ];
    const vertConvolved = new Array(imageData.data.length);
    this.convolveKernel(vertConvolved, grayscaleImage, imageData.width, imageData.height, sobelVert, 3);

    for (let i = 0; i < horizConvolved.length; i += 4) {
      const finalIntensity = Math.sqrt(Math.pow(horizConvolved[i], 2) + Math.pow(vertConvolved[i], 2));
      outRgba[i] = finalIntensity;
      outRgba[i + 1] = finalIntensity;
      outRgba[i + 2] = finalIntensity;
      outRgba[i + 3] = imageData.data[i + 3];
    }

    this.invert(outRgba, outRgba, imageData.width, imageData.height);
  }

  getCharForVal(val) {
    for (let i = 0; i < CHAR_GRADIENT.length; i++) {
      const linearThresh = (i + 1) / CHAR_GRADIENT.length;
      const thresh = Math.pow(linearThresh, 1);
      if (val < thresh) return CHAR_GRADIENT[i];
    }
    return CHAR_GRADIENT[CHAR_GRADIENT.length - 1];
  }

  convert(imageData, outCharacterWidth) {
    const aspectRatio = imageData.width / imageData.height;
    const outCharacterHeight = Math.ceil((outCharacterWidth / aspectRatio) / (this.charHeight / this.charWidth));
    const rgb = imageData.data;
    const block = [];
    const out = [];
    const imageCharacterWidth = imageData.width / outCharacterWidth;
    const imageCharacterHeight = imageData.height / outCharacterHeight;

    for (let y = 0; y < outCharacterHeight; y++) { // for each character row
      for (let x = 0; x < outCharacterWidth; x++) { // for each character in row
        // find block of source image that corresponds to this character
        const pxOffset = x * imageCharacterWidth;
        const pyOffset = y * imageCharacterHeight;
        let ctr = 0;
        for (let py = pyOffset; py < pyOffset + imageCharacterHeight; py++) {
          const roundPy = Math.round(py);
          for (let px = pxOffset; px < pxOffset + imageCharacterWidth; px++) {
            const roundPx = Math.round(px);
            const pixelIndex = roundPy * imageData.width + roundPx;
            block[ctr++] = rgb[4 * pixelIndex];
            block[ctr++] = rgb[4 * pixelIndex + 1];
            block[ctr++] = rgb[4 * pixelIndex + 2];
          }
        }
        block.length = ctr;

        const blockRgbSum = block.reduce((acc, val) => acc + val, 0);
        const val = blockRgbSum / (255 * block.length);
        out.push(this.getCharForVal(val));
      }
    }

    return out;
  }
}

export default ImageConverter;