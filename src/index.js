import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import HomePage2023Archive from './archive/2023/components/HomePage';
import SquashPage from './components/SquashPage';
import blogContents from './squashBlogContents/index';
import SquashBlogContents from './components/SquashBlogContents';
import BlogPage from './components/BlogPage';
import HomePage from './components/HomePage';

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
                <SquashBlogContents contentData={bc} />
              </BlogPage>
            </Route>
          );
        })}
        <Route path="/squash">
          <SquashPage />
        </Route>
        <Route path="/new">
          <HomePage />
        </Route>
        <Route path="/">
          <HomePage2023Archive />
        </Route>
      </Switch>
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
