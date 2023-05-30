import { navWidth, topBarHeight, isTouchScreen } from '../constants';

const email = 'ben.leveque@gmail.com';
const linkedin = 'linkedin';

const navTextLeft = 3;
const navTextTopBetween = 3;

const getNavProps = (onClick, pageName) => {
  return { className: 'clickable', 'aria-label': `Navigate to ${pageName} page`, onClick: () => onClick(pageName) };
};

export default (onNavClick) => {
  return [
    // top info
    { type: 'text', data: { start: [navWidth + 2, 1], text: 'Ben LeVeque' }},
    { type: 'text', data: { start: [-(email.length + 3), 3], text: email }},
    { type: 'text', data: { start: [-(linkedin.length + 3), 4], text: linkedin, props: { href: 'https://www.linkedin.com/in/benjamin-leveque-5a534361/' } }},

    // left nav
    // { type: 'text', data: { start: [navTextLeft, topBarHeight + 1], text: 'Home', props: getNavProps(onNavClick, 'home') }},
    // { type: 'text', data: { start: [navTextLeft, navTextTopBetween], isYRelative: true, text: 'Work', props: getNavProps(onNavClick, 'work') }},
    // { type: 'text', data: { start: [navTextLeft, navTextTopBetween], isYRelative: true, text: 'TV', props: getNavProps(onNavClick, 'tv') }},
    // { type: 'text', data: { start: [navTextLeft, navTextTopBetween], isYRelative: true, text: 'About', props: getNavProps(onNavClick, 'about') }},

    // nav
    { type: 'text', data: { start: ['5%', topBarHeight - 1], text: 'Home', props: getNavProps(onNavClick, 'home') }},
    // { type: 'text', data: { start: ['30%', topBarHeight - 1], text: 'Work', props: getNavProps(onNavClick, 'work') }},
    { type: 'text', data: { start: ['30%', topBarHeight - 1], text: 'About', props: getNavProps(onNavClick, 'about') }},
    !isTouchScreen && { type: 'text', data: { start: ['55%', topBarHeight - 1], text: 'TV', props: getNavProps(onNavClick, 'tv') }},

    // lines
    { type: 'line', data: { start: [navWidth, topBarHeight - 2], end: ['100%', topBarHeight - 2] }},
    { type: 'line', data: { start: [navWidth, topBarHeight], end: ['100%', topBarHeight] }}
    // { type: 'line', data: { start: [navWidth, 0], end: [navWidth, '98%'] }}
  ];
};