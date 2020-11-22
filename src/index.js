import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import One from './One'
import{
   Router,
  Route,
  // createBrowserHistory
//  browserHistory
}from 'react-router-dom';
// import {  browserHistory } from 'history'
import{ createBrowserHistory} from 'history/createBrowserHistory'
// import { browserHistory } from 'history'


ReactDOM.render(
  <Router history={createBrowserHistory }>
    <Route path="/" component={App}/>
    <Route path='/One' component={One}/>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
