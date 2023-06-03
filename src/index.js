import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import HomePage from './components/HomePage';
import SquashPage from './components/SquashPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/squash">
          <SquashPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
