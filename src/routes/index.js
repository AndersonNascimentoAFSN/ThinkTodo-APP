import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Todo } from '../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/todo" component={ Todo } />
    <Route path="/" component={ Home } />
  </Switch>
);

export default Routes;
