import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Header from './components/Header/index.js';
import About from './Pages/About/index.js'

export default (
  <Router history={hashHistory}>
    <Route path ='/' component = {Header}>
      <IndexRoute component={About} />
    </Route>
  </Router>
);
