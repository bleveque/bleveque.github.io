import MetadataParser from '../metadataParser';

const convertVideo = (asciiWidth, videoRef, videoCanvasRef, stringRenderer, imageConverter) => {
  const video = videoRef.current;
  const canvas = videoCanvasRef.current;
  if (!video || !canvas) return;

  const context = canvas.getContext('2d');

  canvas.width = 400;
  canvas.height = canvas.width * video.videoHeight / video.videoWidth;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

  imageConverter.edgeDetection(imageData.data, imageData);
  context.putImageData(imageData, 0, 0);

  const asciiImageArray = imageConverter.convert(imageData, asciiWidth);
  const currentContentArr = stringRenderer.getContent().split('');
  stringRenderer.renderTextrect(currentContentArr, null, { start: [14,8], width: asciiWidth, text: asciiImageArray.join('') });
  stringRenderer.fillEmptyEntriesAndAddLineBreaks(currentContentArr);
  currentContent = currentContentArr.join('');
  stringRenderer.setContent(currentContent);
  setElements(MetadataParser(currentContent, stringRenderer.getTextMetadata()));

  // setTimeout(convertVideo(asciiWidth, videoRef, videoCanvasRef, stringRenderer), 1000 / 30);
};

let interval = null;

const convertOnClick = (asciiWidth, videoRef, videoCanvasRef, stringRenderer, imageConverter) {
  if (interval) cancelInterval(interval);

  interval = setInterval(() => {
    convertVideo(asciiWidth, videoRef, videoCanvasRef, stringRenderer, imageConverter);
  }, 1000 / 30);
};

export const genVideoContent = (videoRef, videoCanvasRef, stringRenderer, imageConverter) => [
  { type: 'text', data: { start: [14, 6], text: 'Convert Video:' }},
  { type: 'text', data: { start: [30, 6], text: '200', props: { className: 'clickable', onClick: () => convertOnClick(200, videoWidth, videoCanvasWidth, stringRenderer, imageConverter) } }},
  { type: 'text', data: { start: [35, 6], text: '80', props: { className: 'clickable', onClick: () => convertOnClick(80, videoWidth, videoCanvasWidth, stringRenderer, imageConverter) } }},
  { type: 'text', data: { start: [39, 6], text: '40', props: { className: 'clickable', onClick: () => convertOnClick(40, videoWidth, videoCanvasWidth, stringRenderer, imageConverter) } }},
  { type: 'line', data: { start: [94,0], end: [94, '100%'] }}
];


// const convertVideo = asciiWidth => evt => {
//   // document.getElementById('source-video').play();
//   const video = document.getElementById('source-video'); // TEMP
//   // video.play();
//   const canvas = document.getElementById('video-source-canvas');
//   const context = canvas.getContext('2d');
//   canvas.width = 400;//video.videoWidth;
//   canvas.height = canvas.width * video.videoHeight / video.videoWidth;
//   context.drawImage(video, 0, 0, canvas.width, canvas.height);
//   const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
//   imageConverter.edgeDetection(imageData.data, imageData);
//   context.putImageData(imageData, 0, 0);
//   // const asciiWidth = 160;
//   const asciiImageArray = imageConverter.convert(imageData, asciiWidth);
//   const currentContentArr = stringRenderer.getContent().split('');
//   stringRenderer.renderTextrect(currentContentArr, null, { start: [14,8], width: asciiWidth, text: asciiImageArray.join('') });
//   stringRenderer.fillEmptyEntriesAndAddLineBreaks(currentContentArr);
//   currentContent = currentContentArr.join('');
//   stringRenderer.setContent(currentContent);
//   setElements(MetadataParser(currentContent, stringRenderer.getTextMetadata()));

//   setTimeout(convertVideo(asciiWidth), 1000 / 30);
// };



const convertImage = asciiWidth => evt => {
  const image = document.getElementById('source-image');
  const canvas = document.getElementById('source-canvas');
  const context = canvas.getContext('2d');
  canvas.width = image.width;
  canvas.height = image.height;
  context.drawImage(image, 0, 0);
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  // imageConverter.edgeDetection(imageData.data, imageData);
  context.putImageData(imageData, 0, 0);
  // const asciiWidth = 160;
  const asciiImageArray = imageConverter.convert(imageData, asciiWidth);
  const currentContentArr = stringRenderer.getContent().split('');
  stringRenderer.renderTextrect(currentContentArr, null, { start: [14,8], width: asciiWidth, text: asciiImageArray.join('') });
  stringRenderer.fillEmptyEntriesAndAddLineBreaks(currentContentArr);
  currentContent = currentContentArr.join('');
  stringRenderer.setContent(currentContent);
  setElements(MetadataParser(currentContent, stringRenderer.getTextMetadata()));
};

export const genImageContent =

pageData.ASCII_PICTURE = [
  { type: 'text', data: { start: [14, 6], text: 'Convert Image:' }},
  { type: 'text', data: { start: [30, 6], text: '160', props: { className: 'clickable', onClick: convertImage(160) } }},
  { type: 'text', data: { start: [35, 6], text: '80', props: { className: 'clickable', onClick: convertImage(80) } }},
  { type: 'text', data: { start: [39, 6], text: '40', props: { className: 'clickable', onClick: convertImage(40) } }},
  ...navData,
  { type: 'line', data: { start: [94,0], end: [94, '100%'] }}
];

