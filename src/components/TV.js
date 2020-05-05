import React from 'react';
import StringRenderArea from './StringRenderArea';
import ImageConverter from '../ImageConverter';

let numRenders = 0;

class TV extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      singleCharWidth: 1,
      singleCharHeight: 2,
      verticalCharPadding: 0,
      paused: false
    };

    this.imageConverter = new ImageConverter();
    this.interval = null;
    this.refreshRate = 30;

    this.videoRef = React.createRef();
    this.canvasRef = React.createRef();

    this.frameData = null;
    this.frameConfig = {};

    this.setCharDims = this.setCharDims.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.shouldRender()) {
        this.forceUpdate();
      }
    }, 1000 / this.refreshRate);
  }

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval);
    this.interval = null;
  }

  getBlankScreenElements() {
    return [ // TODO maybe we could reuse resources from frame to frame
      { type: 'textrect', data: { start: [0,0], width: this.getCharWidthTvUnits(), text: (new Array(this.getCharWidthTvUnits() * this.getCharHeightTvUnits() + 1)).join('#') }}
    ];
  }



  getElementsFromVideo() {
    const video = this.videoRef.current;
    const canvas = this.canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = 300;
    canvas.height = canvas.width * video.videoHeight / video.videoWidth;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    if (this.props.edgeModeOn === true) this.imageConverter.edgeDetection(imageData.data, imageData);
    context.putImageData(imageData, 0, 0);

    const asciiImageArray = this.imageConverter.convert(imageData, this.getCharWidthTvUnits());
    return [
      { type: 'textrect', data: { start: [0,0], width: this.getCharWidthTvUnits(), text: asciiImageArray.join('') } }
    ];
  }

  getCharWidthTvUnits() {
    return Math.floor(this.props.tvWidthPx / this.state.singleCharWidth);
  }

  getCharHeightTvUnits() {
    return Math.floor((this.props.tvHeightPx - this.state.verticalCharPadding) / this.state.singleCharHeight);
  }

  setCharDims(singleCharWidth, singleCharHeight, verticalCharPadding) {
    this.imageConverter.setCharDimensions(singleCharWidth, singleCharHeight, verticalCharPadding);
    this.setState({ singleCharWidth, singleCharHeight, verticalCharPadding });
  }

  shouldRender() {
    return true;
  }

  render() {
    let elements;
    // numRenders++;
    // if (numRenders % 10 === 0) console.log('numRenders', numRenders);

    if (this.props.on && this.videoRef.current && this.videoRef.current.videoHeight) {
      if (this.state.paused) {
        if (!this.videoRef.current.paused) this.videoRef.current.pause();
      } else if (this.videoRef.current.paused) {
        this.videoRef.current.play();
      }
      elements = this.getElementsFromVideo();
    } else {
      if (this.videoRef.current && !this.videoRef.current.paused) this.videoRef.current.pause();
      elements = this.getBlankScreenElements();
    }

    return (
      <React.Fragment>
        <span onClick={() => this.setState({paused: !this.state.paused})}>
          <StringRenderArea
            data={elements}
            fixedWidthPx={this.props.tvWidthPx}
            fixedHeightPx={this.props.tvHeightPx}
            onSetCharDims={this.setCharDims}
          />
        </span>

        {/* hidden video and canvas elements from which to pull image data */}
        <div key="video-helper-elt-container" className="video-helper-elt-container"><video controls width="300px" ref={this.videoRef} src={this.props.src} /><canvas ref={this.canvasRef} /></div>
      </React.Fragment>
    );
  }
}

export default TV;
