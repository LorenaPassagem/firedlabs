import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Video from './pages/Video';
import GueioRunner from './pages/games/GueioRunner';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/video/new" component={Video} />
        <Route path="/games/gueiorunner" component={GueioRunner} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
