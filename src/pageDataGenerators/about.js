import { contentOffsets, maxPagePxWidth, isTouchScreen } from '../constants';

const wrappedExplanation = `\
About this website\n\
---------------------\n\
The idea for this website was to use characters as the building blocks for the page\'s \
content -- one big string of characters that wraps at the right side of the page or after ${maxPagePxWidth}px. \
Some characters are wrapped in separate elements for styling and interactivity, \
and the "screen" on the TV page is its own "character render area", but hopefully \
the site retains the spirit of the original idea. \
${!isTouchScreen ? '' : '\n\n(Try using a non-touch display to view the TV page.)'}\n\
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
Resources\n\
---------------------\n\
This site was built using React and is hosted on GitHub pages. A couple React + GitHub Pages resources I found helpful: \
`;

const [left, top] = contentOffsets;

export default () => {
  return {
    stringRenderData: [
      { type: 'text', data: { start: [left,top], maxWidth: 80, rightMargin: 5, text: wrappedExplanation}},
      { type: 'text', data: { start: [left + 2,2], isYRelative: true, maxWidth: 80, text: 'create-react-app', props: { href: 'https://github.com/facebook/create-react-app' } }},
      { type: 'text', data: { start: [left + 2,1], isYRelative: true, maxWidth: 80, text: 'gh-pages', props: { href: 'https://www.npmjs.com/package/gh-pages' } }},
      { type: 'text', data: { start: [left + 2,1], isYRelative: true, maxWidth: 80, text: 'this post', props: { href: 'https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d' } }},
      { type: 'text', data: { start: [left,1], isYRelative: true, maxWidth: 80, text: '\n ' }}
    ]
  };
};