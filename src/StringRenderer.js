// TODO: data format description

const LINK_REGEX = /\[([^\]]*)\]\((http[^\]]*)\)/;
const CHUNK_TYPES = {
  NONE: 0,
  REGULAR: 1,
  LINK: 2
};

const interpolate = (a, b, t) => {
  return a * (1 - t) + b * t;
};

const parseLinks = text => {
  const linkMetadata = [];
  let match;

  while (match = text.match(LINK_REGEX)) {
    text = text.substring(0, match.index) + match[1] + text.substring(match.index + match[0].length);
    linkMetadata.push({ start: match.index, end: match.index + match[1].length - 1, href: match[2] }); // end is the last index included in the link
  }

  return [text, linkMetadata];
};

const shouldWrap = (text, textIdx, x, initX, rendererWidth, maxWidth, rightMargin = 0) => {
  if (text[textIdx] === '\n') return true;
  if (maxWidth) {
    // if x exceeds maxWidth or the right margin, wrap
    if (x >= rendererWidth - rightMargin || x - initX + 1 > maxWidth) {
      return true;
    }

    // if maxWidth is defined, we should break lines on spaces
    if (text[textIdx] === ' ') {
      let nextBreakIdx = text.substring(textIdx + 1).search(/[\n ]/); // NOTE: current implementation requires a space at the end of wrapped text in order to wrap the last word correctly

      if (nextBreakIdx >= 0) {
        nextBreakIdx += textIdx + 1;
        let nextBreakX = (nextBreakIdx - textIdx) + x; // (index within text of next break - current index in text) + current x == x of next break

        if (nextBreakX >= rendererWidth - rightMargin || nextBreakX - initX + 1 > maxWidth) {
          return true;
        }
      }
    }
  }
  return false;
};

const pushChunk = (chunkMetadata, textIdx, linkMetadata, chunkStart, chunkEnd, chunkProps) => {
  if (!isFinite(chunkStart) || !isFinite(chunkEnd) || !chunkMetadata) return Infinity;

  let props = chunkProps ? { ...chunkProps } : null;

  if (linkMetadata) {
    for (let i = 0; i < linkMetadata.length; i++) {
      if (linkMetadata[i].start <= textIdx && textIdx <= linkMetadata[i].end) {
        props = props || {};
        props.href = linkMetadata[i].href;
        break;
      }
    }
  }

  if (props) chunkMetadata.push({ start: chunkStart, end: chunkEnd, props });
  return Infinity;
};

const atStartOfLink = (textIdx, linkMetadata) => {
  for (let i = 0; i < linkMetadata.length; i++) {
    if (linkMetadata[i].start === textIdx) return true;
  }
  return false;
};

const atEndOfLink = (textIdx, linkMetadata) => {
  for (let i = 0; i < linkMetadata.length; i++) {
    if (linkMetadata[i].end === textIdx) return true;
  }
  return false;
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
      chars[i] = chars[i] || ' ';
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

  // approach:
  //  for each index in text:
  //    decide if we should go to the next line -- if so, update x and y, push chunk, and continue
  //      if we hit a newline character
  //      if we exceeded maxWidth, taking rightMargin into account
  //    if x is at beginning of line and character is whitespace, continue without incrementing x
  //    if i is at the start of a link, push the last chunk
  //    then we can write character into out
  //    if x is at the end of a link, push link chunk

  renderText(out, chunkMetadata, inputData, relativeY) {
    let { text: initText, start: [x, y], maxWidth, rightMargin, isYRelative, props } = inputData;
    x = this.parseWidth(x);
    y = this.parseHeight(out, y);
    if (isYRelative) y += relativeY;
    if (x < 0) x += this.width;
    const initX = x;

    let [text, linkMetadata] = parseLinks(initText);

    let chunkStart = Infinity;
    let chunkEnd = -Infinity;
    let maxY = y;

    for (let i = 0; i < text.length; i++) {
      // x outside of the page; don't write anything to out, just increment x and continue
      if (x < 0 || (x >= this.width && !maxWidth)) {
        x++;
        continue;
      }

      if (shouldWrap(text, i, x, initX, this.width, maxWidth, rightMargin)) {
        x = initX;
        y++;
        chunkStart = pushChunk(chunkMetadata, i, linkMetadata, chunkStart, chunkEnd, props); // NOTE: not ideal for a11y to break up links across lines
        continue;
      }

      if (x === initX && text[i] === ' ') continue;

      if (atStartOfLink(i, linkMetadata)) chunkStart = pushChunk(chunkMetadata, -1, null, chunkStart, chunkEnd, props);

      const outIdx = this.getIdxWithBreaks(x, y);
      out[outIdx] = text[i];
      chunkStart = Math.min(chunkStart, outIdx);
      chunkEnd = Math.max(chunkEnd, outIdx);
      maxY = Math.max(maxY, y);
      x++;

      if (atEndOfLink(i, linkMetadata)) chunkStart = pushChunk(chunkMetadata, i, linkMetadata, chunkStart, chunkEnd, props);
    }

    pushChunk(chunkMetadata, -1, null, chunkStart, chunkEnd, props);

    if (text[text.length - 1] === '\n') out[this.getIdxWithBreaks(x, y - 1)] = '\n';

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
          chunkMetadata.push({ start: chunkStart, end: chunkEnd, props: inputData.props });
        }
        chunkStart = outIdx;
      }
      chunkEnd = outIdx;
    }

    if (isFinite(chunkEnd) && chunkMetadata && inputData.props) chunkMetadata.push({ start: chunkStart, end: chunkEnd, props: inputData.props });

    return maxY;
  }

  renderLine(out, chunkMetadata, inputData) {
    const { start, end } = inputData;
    if (start[0] === end[0] && start[1] === end[1]) { // point
      const outIdx = this.getIdxWithBreaks(start[0], start[1]);
      out[outIdx] = '\u00b7';
      chunkMetadata.push({ start: outIdx, end: outIdx, props: { 'aria-hidden': true } });
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
      chunkMetadata.push({ start: startIdx, end: endIdx, props: {'aria-hidden': true} });
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
