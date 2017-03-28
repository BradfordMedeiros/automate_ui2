import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

const createRoutes = App => (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="*" component={App} />
  </Router>
);

export default createRoutes;
