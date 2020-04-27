const navWidth = 0;
const topBarHeight = 7;
const contentOffsets = [ navWidth + 2, topBarHeight + 2 ];

const maxPagePxWidth = 1400;

// adapted from approach here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
const isTouchScreen = !!(navigator.maxTouchPoints && navigator.maxTouchPoints > 0);

export { navWidth, topBarHeight, contentOffsets, maxPagePxWidth, isTouchScreen };