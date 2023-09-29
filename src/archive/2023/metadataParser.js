import React from 'react';

import AriaButton from './components/AriaButton';

// inputs:
//   str: big string with line breaks and spaces
//   textMetadata: array of chunk metadata describing how to wrap intervals in the string
//                 assumed to be in order by start index

export default (str, textMetadata, fontSize) => {
  let elements = [];

  let lastEnd = -1; // the last index we've added to elements already
  for (let i = 0; i < textMetadata.length; i++) {
    let { start, end, props } = textMetadata[i];
    start = Math.max(start, lastEnd + 1);
    if (start > lastEnd + 1) elements.push(<span key={`span-prev-${i}`}>{str.substring(lastEnd + 1, start)}</span>);

    if (props && props.href) {
      elements.push(<a key={`a-${i}`} {...props}>{str.substring(start, end + 1)}</a>);
    } else if (props && props.onClick) {
      elements.push(<AriaButton key={`ariabutton-${i}`} style={{fontSize}} {...props}>{str.substring(start, end + 1)}</AriaButton>);
    } else if (props) {
      elements.push(<span key={`span-${i}`} {...props}>{str.substring(start, end + 1)}</span>);
    } else {
      elements.push(<span key={`span-${i}`}>{str.substring(start, end + 1)}</span>);
    }
    lastEnd = end;
  }
  if (lastEnd < str.length) elements.push(<span key="span-last">{str.substring(lastEnd + 1, str.length)}</span>);
  return elements;
};