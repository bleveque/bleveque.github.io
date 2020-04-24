import React from 'react';
import TV from '../components/TV.js';
import { contentOffsets } from '../constants';

const [contentLeft, contentTop] = contentOffsets;

const tv = '\
__________________________________________________________________________________________\
|                                                                    |                   |\
|  ________________________________________________________________  |___________________|\
|  |\\____________________________________________________________/|  |    - QUALITY -    |\
|  ||                                                            ||  |      _______      |\
|  ||                                                            ||  |     / _____ \\     |\
|  ||                                                            ||  |    / /   //\\ \\    |\
|  ||                                                            ||  |   / /   //  \\ \\   |\
|  ||                                                            ||  |   \\ \\  //   / /   |\
|  ||                                                            ||  |    \\ \\_____/ /    |\
|  ||                                                            ||  |     \\_______/     |\
|  ||                                                            ||  |                   |\
|  ||                                                            ||  |    - CHANNEL -    |\
|  ||                                                            ||  |    DOWN     UP    |\
|  ||                                                            ||  |                   |\
|  ||                                                            ||  |    -EDGE MODE-    |\
|  ||                                                            ||  |    OFF      ON    |\
|  ||                                                            ||  |___________________|\
|  ||                                                            ||  | _________________ |\
|  ||                                                            ||  | _________________ |\
|  ||                                                            ||  | _________________ |\
|  ||                                                            ||  | _________________ |\
|  ||                                                            ||  | _________________ |\
|  ||                                                            ||  | _________________ |\
|  ||____________________________________________________________||  |___________________|\
|  |/____________________________________________________________\\|  |                   |\
|                                                                    |         ||        |\
|____________________________________________________________________|___________________|\
|  /                                                                                  \\  |\
|_/                                                                                    \\_|\
';

const CHANNELS = [
  { src: "/yell-ElkandCars000125MTS.mp4", title: "Bull elk ramming a car (NPS)", url: "https://www.nps.gov/media/video/view.htm?id=CEF4E37F-1DD8-B71B-0B7B5EC8C8071E13" },
  { src: "/yell-BighornSheep00697MTS_original_1920x1080.mp4", title: "Bighorn Sheep (NPS)", url: "https://www.nps.gov/media/video/view.htm?id=0E023AB3-155D-451F-677AEBFA0925A047" },
  { src: "/yell-GBear00452.mp4", title: "Grizzly Bear (early spring) (NPS)", url: "https://www.nps.gov/media/video/view.htm?id=DCE37092-155D-451F-67F448AC5DE819B0" },
  { src: "/grca-paddleraft.mp4", title: "Paddle Assisted Raft in Rapid (NPS)", url: "https://www.nps.gov/media/video/view.htm?id=5A9F1B07-155D-451F-673B996C4F4164BA" },
  { src: "/grca-trainmix.mp4", title: "Grand Canyon Railway Mix (NPS)", url: "https://www.nps.gov/grca/learn/photosmultimedia/b-roll_hd29.htm" },
  { src: "/242_OceanWorlds_small.mp4", title: "ScienceCasts: Ocean Worlds (NASA)", url: "https://images.nasa.gov/details-242_OceanWorlds"}
  // { src: "yell-CTTroutGOPRO104MP4.mp4", title: "Cutthroat Trout (NPS)", url: "https://www.nps.gov/media/video/view.htm?id=A9E1779E-155D-451F-678DD7B58221E1E8" },
  // { src: "/jsc2017m001167_2017_Space_Station_Science_in_Pictures_MP4_small.mp4", title: "2017 Space Station Science in Pictures (NASA)", url: "https://images.nasa.gov/details-jsc2017m001167_2017_Space_Station_Science_in_Pictures_MP4" },
];

const wrapppedTvText = '\
About this TV page\n\
----------------------\n\
\n\
Why these videos?\n\
\n\
I was looking for some public domain videos to use here, and the National Parks Service \
and NASA had some fun ones!\n\
';

const screenWidth = 60;
const screenHeight = 21;
export {screenWidth, screenHeight};

// left and top from [0,0] of screen
const tvLeft = contentLeft + 6;;
const tvTop = contentTop + 4;
const tvWidth = 90;
const tvHeight = 30;

// left and top offset of screen from top-left of tv box
const tvScreenLeftOffset = 5;
const tvScreenTopOffset = 4;

// left and top offset of on/off button pair from top-left of tv
const tvOffLeftOffset = 74;
const tvOnOffTopOffset = 26;

// top for channel down/up button pair (same left as above)
const tvChannelTopOffset = 13;
const downToUpText = 'DOWN     ';
const tvChannelUpLeftOffset = tvOffLeftOffset + downToUpText.length;

// top for edge mode on/off button pair (same left as above)
const tvEdgeModeTopOffset = 16;

// left and top offset of knobs
const tvKnobLeftOffset = 73;
const tvKnobTopOfset = 5;

// left and top of now showing text
const tvNowShowingLeft = 5;
const tvNowShowingTop = 26;

const offToOnText = 'OFF      ';
const tvOnLeftOffset = tvOffLeftOffset + offToOnText.length;

export default ({ tvOn, setTvOn, tvChannel, setTvChannel, tvEdgeModeOn, setTvEdgeModeOn, tvDimMultiplier, setTvDimMultiplier, fontSize }) => {
  const tvNowShowingText = !tvOn ? '' : `Channel: ${CHANNELS[tvChannel].title} (link)`;

  return {
    stringRenderData: [
      // instruction text
      { type: 'text', data: { start: [tvLeft,7], text: 'Press "ON" in the bottom right to watch some Unicode TV!' }},
      { type: 'text', data: { start: [tvLeft,9], text: 'Press the number buttons to change the resolution.' }},

      // tv box
      { type: 'textrect', data: { start: [tvLeft,10], width: tvWidth, text: tv }},

      // tv off/on
      { type: 'text', data: { start: [tvLeft + tvOffLeftOffset, tvTop + tvOnOffTopOffset], text: 'OFF', props: { className: `clickable ${tvOn ? '' : 'selected'}`, onClick: () => setTvOn(false) } }},
      { type: 'text', data: { start: [tvLeft + tvOnLeftOffset, tvTop + tvOnOffTopOffset], text: 'ON', props: { className: `clickable ${tvOn ? 'selected' : ''}`, onClick: () => setTvOn(true) } }},

      // tv channel down/up
      { type: 'text', data: { start: [tvLeft + tvOffLeftOffset, tvTop + tvChannelTopOffset], text: 'DOWN', props: { className: 'clickable', onClick: () => setTvChannel((tvChannel - 1 + CHANNELS.length) % CHANNELS.length) } }},
      { type: 'text', data: { start: [tvLeft + tvChannelUpLeftOffset, tvTop + tvChannelTopOffset], text: 'UP', props: { className: 'clickable', onClick: () => setTvChannel((tvChannel + 1) % CHANNELS.length) } }},

      // tv edge mode off/on
      { type: 'text', data: { start: [tvLeft + tvOffLeftOffset, tvTop + tvEdgeModeTopOffset], text: 'OFF', props: { className: `clickable ${tvEdgeModeOn ? '' : 'selected'}`, onClick: () => setTvEdgeModeOn(false) } }},
      { type: 'text', data: { start: [tvLeft + tvOnLeftOffset, tvTop + tvEdgeModeTopOffset], text: 'ON', props: { className: `clickable ${tvEdgeModeOn ? 'selected' : ''}`, onClick: () => setTvEdgeModeOn(true) } }},

      // resolution knobs
      { type: 'text', data: { start: [tvLeft + tvKnobLeftOffset + 9, tvTop + tvKnobTopOfset + 0], text: '1', props: { className: `clickable ${tvDimMultiplier === 1 ? 'selected' : ''}`, onClick: () => setTvDimMultiplier(1) } }},
      { type: 'text', data: { start: [tvLeft + tvKnobLeftOffset + 11, tvTop + tvKnobTopOfset + 2], text: '2', props: { className: `clickable ${tvDimMultiplier === 2 ? 'selected' : ''}`, onClick: () => setTvDimMultiplier(2) } }},
      { type: 'text', data: { start: [tvLeft + tvKnobLeftOffset + 10, tvTop + tvKnobTopOfset + 4], text: '3', props: { className: `clickable ${tvDimMultiplier === 3 ? 'selected' : ''}`, onClick: () => setTvDimMultiplier(3) } }},
      { type: 'text', data: { start: [tvLeft + tvKnobLeftOffset + 2, tvTop + tvKnobTopOfset + 4], text: '4', props: { className: `clickable ${tvDimMultiplier === 4 ? 'selected' : ''}`, onClick: () => setTvDimMultiplier(4) } }},
      { type: 'text', data: { start: [tvLeft + tvKnobLeftOffset + 1, tvTop + tvKnobTopOfset + 2], text: '5', props: { className: `clickable ${tvDimMultiplier === 5 ? 'selected' : ''}`, onClick: () => setTvDimMultiplier(5) } }},
      { type: 'text', data: { start: [tvLeft + tvKnobLeftOffset + 3, tvTop + tvKnobTopOfset + 0], text: '6', props: { className: `clickable ${tvDimMultiplier === 6 ? 'selected' : ''}`, onClick: () => setTvDimMultiplier(6) } }},

      // now showing text
      tvOn && { type: 'text', data: { start: [tvLeft + tvNowShowingLeft, tvTop + tvNowShowingTop], text: tvNowShowingText }},
      tvOn && { type: 'text', data: { start: [tvLeft + tvNowShowingLeft + tvNowShowingText.length - 5, tvTop + tvNowShowingTop], text: 'link', props: { href: CHANNELS[tvChannel].url }}},

      // about text
      { type: 'text', data: { start: [tvLeft, tvTop + tvHeight + 5], maxWidth: tvWidth, text: wrapppedTvText }}
    ],
    stringRenderChildElementDataGenerator: (singleCharWidth, singleCharHeight, verticalCharPadding) => {
      const left = (tvLeft + tvScreenLeftOffset) * singleCharWidth;
      const top = (tvTop + tvScreenTopOffset) * singleCharHeight + (verticalCharPadding / 2);
      const width = screenWidth * singleCharWidth;
      const height = screenHeight * singleCharHeight;
      const tvFontSize = fontSize / tvDimMultiplier;

      return [
        <div key="tv-container" style={{left:`${left}px`, top:`${top}px`, width:`${width}px`, height:`${height}px`, position:'absolute', fontSize:`${tvFontSize}px`, lineHeight:`${tvFontSize}px`}}>
          <TV
            key={`tv-screen-${tvDimMultiplier}`}
            on={tvOn}
            edgeModeOn={tvEdgeModeOn}
            src={CHANNELS[tvChannel].src}
            tvWidthPx={width}
            tvHeightPx={height}
          />
        </div>
      ];
    }
  };
};
