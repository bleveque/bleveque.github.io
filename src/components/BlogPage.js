import React, { Children } from 'react';
import './BlogPage.css';

const BlogNav = ({ prevLink, nextLink, tocLink, homeLink }) => {
  return (
    <div className="blog-nav">
      <a href={homeLink}>[Home]</a>
      <a href={tocLink}>[Blog table of contents]</a>
      {prevLink && <a href={prevLink}>[Previous post]</a>}
      {nextLink && <a href={nextLink}>[Next post]</a>}
    </div>
  );
};

const BlogPage = (props) => {
  const { prevLink, nextLink, tocLink, homeLink } = props;
  return (
    <div className="root">
      <BlogNav {...props} />
      <div>{props.children}</div>
      <BlogNav {...props} />
    </div>
  );
};

export default BlogPage;
