import React from 'react';

const spaceOrEnter = evt => {
  if (evt.code) return evt.code === 'Space' || evt.code === 'Enter';
  return evt.which === 32 || evt.which === 13;
}

const AriaButton = ({ children, onClick, ...other }) => {
  return (
    <span
      className="clickable"
      role="button"
      tabIndex="0"
      onClick={onClick}
      onKeyDown={evt => { if (spaceOrEnter(evt)) { evt.preventDefault(); evt.stopPropagation(); onClick(evt); }}}
      {...other}
    >
      {children}
    </span>
  );
};

export default AriaButton;
