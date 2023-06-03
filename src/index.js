import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import HomePage from './components/HomePage';
import SquashPage from './components/SquashPage';

function App() {
  return (
    <HashRouter>
      <Switch>
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
