import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Poke from '../components/Poke';
import Swapi from '../components/Swapi';

const index = () => (
  <Switch>
    <Route exact path='/poke' component={Poke} />
    <Route path='/swapi' component={Swapi} />
    <Route exact path='/' component={Home} />
  </Switch>
);

export default index;
