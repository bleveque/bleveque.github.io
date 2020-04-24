import { navWidth, topBarHeight } from '../constants';

const email = 'ben.leveque@gmail.com';
const linkedin = 'linkedin';

const navTextLeft = 3;
const navTextTopBetween = 3;

const getNavProps = (onClick, pageName) => {
  return { className: 'clickable', onClick: () => onClick(pageName) };
};

export default (onNavClick) => {
  return [
    // top info
    { type: 'text', data: { start: [navWidth + 2, 1], text: 'Ben(jamin) LeVeque' }},
    { type: 'text', data: { start: [-(email.length + 3), 1], text: email }},
    { type: 'text', data: { start: [-(linkedin.length + 3), 2], text: linkedin, props: { href: 'https://www.linkedin.com/in/benjamin-leveque-5a534361/' } }},

    // left nav
    { type: 'text', data: { start: [navTextLeft, topBarHeight + 1], text: 'Home', props: getNavProps(onNavClick, 'home') }},
    { type: 'text', data: { start: [navTextLeft, navTextTopBetween], isYRelative: true, text: 'Work', props: getNavProps(onNavClick, 'work') }},
    { type: 'text', data: { start: [navTextLeft, navTextTopBetween], isYRelative: true, text: 'TV', props: getNavProps(onNavClick, 'tv') }},
    { type: 'text', data: { start: [navTextLeft, navTextTopBetween], isYRelative: true, text: 'About', props: getNavProps(onNavClick, 'about') }},

    // lines
    { type: 'line', data: { start: [navWidth + 1, topBarHeight], end: ['100%', topBarHeight] }},
    { type: 'line', data: { start: [navWidth, 0], end: [navWidth, '98%'] }}
  ];
};