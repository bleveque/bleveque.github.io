import { contentOffsets } from '../constants';
const [left, top] = contentOffsets;

const projects = '\
';

export default () => {
  return {
    stringRenderData: [
      { type: 'textrect', data: { start: [left,top], width: 40, text: projects }}
    ]
  };
}