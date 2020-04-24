import { contentOffsets, maxPagePxWidth } from '../constants';

const wrappedExplanation = `\
About this website\n\
---------------------\n\
The idea for this website was to use characters as the building blocks for the page\'s \
content -- one big string of characters that wraps at the right side of the page or after ${maxPagePxWidth}px. \
Some characters are wrapped in separate elements for styling and interactivity, \
and the "screen" on the TV page is its own "character render area", but hopefully \
the site retains the spirit of the original idea.\n\
\n\n\n\n\
Why??\n\
---------------------\n\
I think ASCII/unicode art looks neat, and it was an interesting experiment!\n\
\n\
I also think train station-style flip boards are fun, so I wanted to try \
to incorporate that type of animation into the page transitions here.\n\
\n\
However, since the page is essentially a long string interrupted by some inline elements \
in left-right top-down order, it is horribly inaccessible to screen readers. I would love \
to fix this in a future version.\n\
\n\n\n\n\
`;

const [left, top] = contentOffsets;

export default () => {
  return {
    stringRenderData: [
      { type: 'text', data: { start: [left,top], maxWidth: 80, text: wrappedExplanation}}
    ]
  };
};