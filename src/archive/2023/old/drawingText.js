const width = 50;
const height = 30;
let text = '     CLICK AND DRAG TO DRAW';
let remainingText = ' '.repeat((width * height - 1) + (width - text.length));

export {width as drawingTextWidth, height as drawingTextHeight};
export default (text + remainingText);