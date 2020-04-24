import { DANCING } from '../asciiArt';
import { contentOffsets } from '../constants';

const [left, top] = contentOffsets;

export default () => {
  return {
    stringRenderData: [
      { type: 'text', data: { start: [left, top], text: "I'm Ben:" }},
      { type: 'textrect', data: { start: [left,top + 2], width: 49, text: DANCING[Math.floor(Math.random() * 2)] }}
    ]
  };
};