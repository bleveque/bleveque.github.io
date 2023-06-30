import React, { Children } from 'react';
import './SquashBlogContents.css';

const SquashBlogContents = (props) => {
  return (
    <div>
      <h2 id="post-title">{props.contentData.title} ({props.contentData.date})</h2>
      <div>
        {props.contentData.contents}
      </div>
    </div>
  );
}

export default SquashBlogContents;
