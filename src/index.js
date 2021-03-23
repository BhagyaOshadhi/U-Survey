import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Themes from './Themes';

ReactDOM.render(
  <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/themes" component={Themes}/>
      </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
