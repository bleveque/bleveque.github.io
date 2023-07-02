import React from 'react';
import { createPortal } from 'react-dom';
import './SquashBackground.css';

const SquashBackground = () => {
  return (
    <>
        {createPortal(<div className="squash-background"></div>, document.body)}
    </>
  );
}

export default SquashBackground;
