import { DANCING, REGISTER, REGISTER_VERT } from '../asciiArt';
import { contentOffsets } from '../constants';

const [left, top] = contentOffsets;

export default () => {
  return {
    stringRenderData: [ (windowCharWidth, windowCharHeight) => {
      const showVoteBanner = false;
      const canFitHorizRegister = windowCharWidth > 105 + left;
      const nameTop = showVoteBanner ? (canFitHorizRegister ? top + 26 : top + 46) : top;
      const webringTop = nameTop + 34;
      const voteText = canFitHorizRegister ? REGISTER : REGISTER_VERT;
      return [
        // vote banner
        showVoteBanner && { type: 'textrect', data: { start: [left,top], width: canFitHorizRegister ? 105 : 27, text: voteText, props: { className: 'color-cycle', 'aria-label': 'Please Vote! Links to vote.org', onClick: () => window.location = 'https://www.vote.org/' }}},
        //
        { type: 'text', data: { start: [left, nameTop], text: "I'm Ben:" }},
        { type: 'textrect', data: { start: [left,nameTop + 2], width: 49, text: DANCING[Math.floor(Math.random() * 2)], props: { 'aria-hidden': true } }},
        // webring
        { type: 'text', data: { start: [left, webringTop], text: 'This site is a member of the [Bill De Beest](https://billdebeest.club) webring!' }},
        { type: 'text', data: { start: [left + 6, webringTop + 2], text: '<-- previous', props: { href: 'https://billdebeest.club/prev' } }},
        { type: 'text', data: { start: [left + 21, webringTop + 2], text: '!random!', props: { href: 'https://billdebeest.club/random' } }},
        { type: 'text', data: { start: [left + 32, webringTop + 2], text: 'next -->', props: { href: 'https://billdebeest.club/next' } }},
        { type: 'text', data: { start: [left, webringTop + 4], text: '\n' }}
      ];
    } ]
  };
};
