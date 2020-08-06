import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Colors from './styles/settings/Colors';
import Reset from './styles/Reset';
import App from './App';
import Video from './pages/Video';

ReactDOM.render(
  <React.StrictMode>
    <Colors />
    <Reset />

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/video/new" component={Video} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
