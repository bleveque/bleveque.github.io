import React from 'react';

import StringRenderer from '../StringRenderer';
import metadataParser from '../metadataParser';
import { maxPagePxWidth } from '../constants';

const getWindowWidth = () => {
  return Math.min(window.innerWidth, maxPagePxWidth);
};



class StringRenderArea extends React.Component {
  constructor(props) {
    super(props);

    this.singleCharRef = React.createRef();
    this.doubleCharRef = React.createRef(); // it seems like characters blocks have some vertical padding, so use a single height char and a double-height char to figure out what that padding is

    this.singleCharWidth = -1;
    this.singleCharHeight = -1;
    this.windowCharWidth = 40;
    this.windowCharHeight = 40;
    this.verticalCharPadding = 0;
    this.resizeHandler = null;
    this.content = '';
    this.stringRenderer = new StringRenderer(this.windowCharWidth, this.windowCharHeight, props.data);
  }

  // when component mounts, set up resize handler and figure out pixel dims of a single character
  // also use height of two chars in a column to find the padding around each text block
  componentDidMount() {
    if (this.props.autoResize) {
      this.resizeHandler = this.resize.bind(this);
      window.addEventListener('resize', this.resizeHandler);
    }

    const charHeight = this.singleCharRef.current.getBoundingClientRect().height;
    const doubleCharHeight = this.doubleCharRef.current.getBoundingClientRect().height;
    const verticalCharPadding = 2 * charHeight - doubleCharHeight; // total vertical padding around a text block

    this.singleCharWidth = this.singleCharRef.current.getBoundingClientRect().width;
    this.singleCharHeight = charHeight - verticalCharPadding;
    this.verticalCharPadding = verticalCharPadding;

    // console.log('SINGLE RENDER AREA:', this.singleCharWidth, this.singleCharHeight, this.verticalCharPadding, window.devicePixelRatio);

    this.resize();
    if (this.props.onSetCharDims) this.props.onSetCharDims(this.singleCharWidth, this.singleCharHeight, this.verticalCharPadding);
  }

  // when component is about to unmount, remove resize handler
  componentWillUnmount() {
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
      this.resizeHandler = null;
    }
  }

  // handle resizing by updating stringRenderer with new width and forcing a re-render
  resize() {
    this.windowCharWidth = Math.floor((this.props.fixedWidthPx || getWindowWidth()) / this.singleCharWidth);
    this.windowCharHeight = Math.floor(((this.props.fixedHeightPx || window.innerHeight) - this.verticalCharPadding) / this.singleCharHeight);
    this.stringRenderer.setDimensions(this.windowCharWidth, this.windowCharHeight);
    this.forceUpdate();
  }

  // if animation data is being sent into the component (via props.newData and props.interpolationParameter),
  // perform interpolation and return corresponding elements
  interpolateToNewData() {
    let { str: finalContent, textMetadata: finalTextMetadata } = this.stringRenderer.generateRenderData(this.props.newData, []);
    let intermediateContent = this.stringRenderer.interpolateContent(this.content, finalContent, this.props.interpolationParameter);
    return metadataParser(intermediateContent, finalTextMetadata, this.props.fontSize);
  }

  // if we're animating (i.e., props.newData is set), interpolate with old page data
  // if not, and if we've already found the width of a char, generate elements from this.props.data
  render() {
    let elements;

    if (this.props.newData) {
      elements = this.interpolateToNewData();
    } else if (this.singleCharWidth > 0) {
      this.stringRenderer.setData(this.props.data);
      const {str, textMetadata} = this.stringRenderer.render();
      this.content = str;
      elements = metadataParser(str, textMetadata, this.props.fontSize);
    }

    return (
      <div className={`string-render-area ${this.props.className}`}>
        {elements || <React.Fragment><span ref={this.singleCharRef}>{'_'}</span><br /><span ref={this.doubleCharRef}>{'_\n_'}</span></React.Fragment>}
        {this.props.childElementDataGenerator && this.props.childElementDataGenerator(this.singleCharWidth, this.singleCharHeight, this.verticalCharPadding)}
      </div>
    );
  }
}

export default StringRenderArea;
