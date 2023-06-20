import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import HomePage from './components/HomePage';
import SquashPage from './components/SquashPage';
import blogContents from './squashBlogContents/index';
import SquashBlogContents from './components/SquashBlogContents';
import BlogPage from './components/BlogPage';

function App() {
  return (
    <HashRouter>
      <Switch>
      { blogContents.map((bc, idx) => {
        const prevLink = idx > 0 ? `/#/squash/${blogContents[idx - 1].path}` : null;
        const nextLink = idx < blogContents.length - 1 ? `/#/squash/${blogContents[idx + 1].path}` : null;
        return (
          <Route path={`/squash/${bc.path}`}>
            <BlogPage homeLink="/" prevLink={prevLink} nextLink={nextLink} tocLink="/#/squash">
              <SquashBlogContents>{bc.contents}</SquashBlogContents>
            </BlogPage>
          </Route>
        );
      })}
        <Route path="/squash">
          <SquashPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
