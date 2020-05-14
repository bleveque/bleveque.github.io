// TODO: data format description

const interpolate = (a, b, t) => {
  return a * (1 - t) + b * t;
};


class StringRenderer {
  constructor(width, height, data) {
    this.content = '';
    this.textMetadata = [];
    this.data = data || [];
    this.width = width; // character width of render area (probably screen width)
    this.breakWidth = this.width + 1;
    this.height = height; // character height of render area (probably screen height)
    this.interval = null;
  }

  setData(data) {
    this.data = data;
  }

  getContent() {
    return this.content;
  }

  setContent(content) {
    this.content = content;
  }

  getTextMetadata() {
    return this.textMetadata;
  }

  interpolateContent(initialContent, finalContent, t) {
    if (initialContent.length > finalContent.length) {
      finalContent += (new Array(initialContent.length - finalContent.length + 1)).join(' ');
    } else if (finalContent.length > initialContent.length) {
      initialContent += (new Array(finalContent.length - initialContent.length + 1)).join(' ');
    }
    let interpolatedArr = new Array(initialContent.length);

    const maxLength = Math.max(initialContent.length, finalContent.length);
    for (let i = 0; i < maxLength; i++) {
      if (i % this.breakWidth === this.breakWidth - 1) {
        interpolatedArr[i] = '\n';
      } else {
        interpolatedArr[i] = String.fromCharCode(Math.round(interpolate(initialContent[i].charCodeAt(), finalContent[i].charCodeAt(), t)));
      }
    }

    return interpolatedArr.join('');
  }

  fillEmptyEntriesAndAddLineBreaks(chars) {
    for (let i = 0, len = chars.length; i < len; i++) {
      chars[i] = chars[i] || '\u0020';
      if (i % this.breakWidth === this.breakWidth - 1) chars[i] = '\n';
    }
  }

  scanForAccessibility(chars, chunkMetadata) {

  }

  generateRenderData(inputData, textMetadata) {
    let chars = [];
    let relativeY = 0;

    for (let i = 0; i < inputData.length; i++) {
      if (!inputData[i]) continue;

      const {type, data} = inputData[i];

      if (type === 'text') {
        relativeY = this.renderText(chars, textMetadata, data, relativeY);
      } else if (type === 'textrect') {
        relativeY = this.renderTextrect(chars, textMetadata, data, relativeY);
      } else if (type === 'line') {
        this.renderLine(chars, textMetadata, data);
      }
    }

    this.fillEmptyEntriesAndAddLineBreaks(chars);
    this.scanForAccessibility(chars, textMetadata);

    textMetadata.sort((chunk1, chunk2) => chunk1.start - chunk2.start);

    return { str: chars.join(''), textMetadata };
  }

  render() {
    this.textMetadata.length = 0;

    let { str, textMetadata } = this.generateRenderData(this.data, this.textMetadata);

    this.content = str;

    return { str: this.content, textMetadata: this.textMetadata };
  }

  getIdxWithBreaks(x, y) {
    return y * this.breakWidth + x;
  }

  // if inputData.maxWidth is specified, text will wrap
  //  if it exceeds the page width. Note that it will not
  //  push other non-relative text down, so it may cause overlaps
  renderText(out, chunkMetadata, inputData, relativeY) {
    let { text, start: [x, y], isYRelative } = inputData;
    x = this.parseWidth(x);
    y = this.parseHeight(out, y);
    if (isYRelative) y += relativeY;
    if (x < 0) x += this.width;

    const initX = x;
    let chunkStart = Infinity;
    let chunkEnd = -Infinity;
    let maxY = 0;

    for (let i = 0; i < text.length; i++, x++) {
      if (text[i] === '\n') {
        x = initX - 1;
        y++;
        continue;
      }

      if (x < 0) continue;
      if (x >= this.width && !inputData.maxWidth) continue;

      if (inputData.maxWidth) {
        const rightMargin = inputData.rightMargin || 0;
        if (x >= this.width - rightMargin  || x - initX + 1 > inputData.maxWidth) {
          x = initX;
          y++;
          if (text[i] === ' ') i++;
        } else if (text[i] === ' ') { // break lines on spaces
          const nextNewlineIdx = text.indexOf('\n', i + 1);
          const nextSpaceIdx = text.indexOf(' ', i + 1); // NOTE: current implementation requires a space at the end of wrapped text in order to wrap the last word correctly
          const nextBreakIdx = (nextNewlineIdx === -1 || nextSpaceIdx === -1) ? Math.max(nextSpaceIdx, nextNewlineIdx) : Math.min(nextSpaceIdx, nextNewlineIdx);
          const nextBreakX = (nextBreakIdx - i) + x; // (index within text of next break - current index in text) + current x == x of next break
          if (nextBreakIdx > 0 && (nextBreakX > this.width - rightMargin || nextBreakX - initX + 1 > inputData.maxWidth)) {
            x = initX;
            y++;
            i++;
          }
        }
      }
      const outIdx = this.getIdxWithBreaks(x, y);

      out[outIdx] = text[i];
      chunkStart = Math.min(chunkStart, outIdx);
      chunkEnd = Math.max(chunkEnd, outIdx);
      maxY = Math.max(maxY, y);
    }
    if (chunkMetadata && inputData.props) chunkMetadata.push({ start: chunkStart, end: chunkEnd, inputData });
    return maxY;
  }

  // note: inputData reference may be shared by multiple chunkMetadata entries
  renderTextrect(out, chunkMetadata, inputData, relativeY) {
    let { text, start: [x, y], width, isYRelative } = inputData;
    x = this.parseWidth(x);
    y = this.parseHeight(out, y);
    if (isYRelative) y += relativeY;
    if (x < 0) x += this.width;

    let chunkStart = -Infinity;
    let chunkEnd = -Infinity;
    let maxY = 0;

    for (let i = 0; i < text.length; i++) {
      if (x + (i % width) < 0 || x + (i % width) >= this.width) continue;
      const dx = i % width;
      const dy = Math.floor(i / width);
      const outIdx = this.getIdxWithBreaks(x + dx, y + dy);
      out[outIdx] = text[i];
      maxY = Math.max(maxY, y + dy);

      if (outIdx > chunkEnd + 1) { // if we've wrapped lines, create new metadata
        if (isFinite(chunkEnd) && chunkMetadata && inputData.props) {
          chunkMetadata.push({ start: chunkStart, end: chunkEnd, inputData });
        }
        chunkStart = outIdx;
      }
      chunkEnd = outIdx;
    }

    if (isFinite(chunkEnd) && chunkMetadata && inputData.props) chunkMetadata.push({ start: chunkStart, end: chunkEnd, inputData });

    return maxY;
  }

  renderLine(out, chunkMetadata, inputData) {
    const { start, end } = inputData;
    if (start[0] === end[0] && start[1] === end[1]) { // point
      const outIdx = this.getIdxWithBreaks(start[0], start[1]);
      out[outIdx] = '\u00b7';
      chunkMetadata.push({ start: outIdx, end: outIdx, inputData: { 'aria-hidden': true } });
    } else if (start[0] === end[0]) { // vertical
      const startHeight = this.parseHeight(out, start[1]);
      const endHeight = this.parseHeight(out, end[1]);
      for (let i = startHeight; i <= endHeight; i++) {
        const outIdx = this.getIdxWithBreaks(this.parseWidth(start[0]), i);
        out[outIdx] = '|';
      }
    } else if (start[1] === end[1]) { // horizontal
      const startWidth = this.parseWidth(start[0]);
      const endWidth = this.parseWidth(end[0]);
      const startIdx = this.getIdxWithBreaks(startWidth, this.parseHeight(out, start[1]));
      const endIdx = this.getIdxWithBreaks(endWidth, this.parseHeight(out, start[1]));
      for (let i = startWidth; i <= endWidth; i++) {
        const outIdx = this.getIdxWithBreaks(i, this.parseHeight(out, start[1]));
        out[outIdx] = '\u2014';
      }
      chunkMetadata.push({ start: startIdx, end: endIdx, inputData: { props: {'aria-hidden': true} } });
    }
  }

  parseWidth(dim) {
    return typeof dim === 'number' ? dim : Math.floor(parseFloat(dim) * this.width / 100);
  }

  parseHeight(chars, dim) {
    if (typeof dim === 'number') return dim;
    const height = Math.max(this.height, Math.ceil(chars.length / this.width));
    return parseFloat(dim) * height / 100;
  }

  setDimensions(width, height) {
    this.width = width;
    this.breakWidth = this.width + 1;
    this.height = height;
  }
}

export default StringRenderer;
