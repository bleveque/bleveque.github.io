import { contentOffsets } from '../constants';
const [left, top] = contentOffsets;

const projects = '\
';

// to do:
// - 

export default () => {
  return {
    stringRenderData: [
      { type: 'textrect', data: { start: [left,top], width: 40, text: projects }}
    ]
  };
}