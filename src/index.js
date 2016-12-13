import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from './components/Main.js'
import Navigation from './components/Navigation.js'

var routes = (<Router history={hashHistory}>
  <Route path="/" component={Main}>
  <IndexRoute component={Navigation}/>
  </Route>
</Router>);

ReactDOM.render(routes,
  document.getElementById('root')
);
