import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './HomePage.css';

import StringRenderArea from './StringRenderArea';
import pageDataGenerators from '../pageDataGenerators/index';
import navDataGenerator from '../pageDataGenerators/nav';
import animationHelper from '../animationHelper';

// responsibilities:
// - keep track of nav state
// - gather data to pass to StringRenderArea

const SHOULD_ANIMATE = true;
const FONT_SIZE = 14;

const HomePage = () => {
  const location = useLocation();
  let pathname = location.pathname.substring(1);
  if (!pageDataGenerators.hasOwnProperty(pathname)) pathname = 'home';

  let [pageName, setPageName] = useState(pathname);
  let [newPageData, setNewPageData] = useState(null);
  let [interpolationParameter, setInterpolationParameter] = useState(0);
  let [tvOn, setTvOn] = useState(false);
  let [tvChannel, setTvChannel] = useState(0);
  let [tvEdgeModeOn, setTvEdgeModeOn] = useState(false);
  let [tvDimMultiplier, setTvDimMultiplier] = useState(4);

  let pageSpecificState = {
    tv: {
      tvOn,
      setTvOn,
      tvChannel,
      setTvChannel,
      tvEdgeModeOn,
      setTvEdgeModeOn,
      tvDimMultiplier,
      setTvDimMultiplier,
      fontSize: FONT_SIZE
    }
  };

  const switchPage = newPageName => {
    if (!SHOULD_ANIMATE) return setPageName(newPageName);

    const { stringRenderData: newStringRenderData } = pageDataGenerators[newPageName](pageSpecificState[newPageName]);

    setNewPageData([ ...newStringRenderData, ...navDataGenerator(switchPage)]);

    animationHelper({
      onTick: setInterpolationParameter,
      onDone: () => {
        setPageName(newPageName);
        setNewPageData(null);
      }
    });
  };

  const { stringRenderData, stringRenderChildElementDataGenerator } = pageDataGenerators[pageName](pageSpecificState[pageName]);
  const navRenderData = navDataGenerator(switchPage);

  return (
    <div className="root" style={{ fontSize: `${FONT_SIZE}px`, lineHeight: `${FONT_SIZE}px` }}>
      <StringRenderArea
        className="home-background"
        fontSize={FONT_SIZE}
        data={[...stringRenderData, ...navRenderData]}
        childElementDataGenerator={(!newPageData && stringRenderChildElementDataGenerator)}
        newData={newPageData}
        interpolationParameter={interpolationParameter}
        autoResize
       />
    </div>
  );
}

export default HomePage;
