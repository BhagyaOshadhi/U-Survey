import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Responsive from "./Reasponsive";
import HoverFocus from "./HoverFocus";
import Darkmode from "./Darkmode";

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/responsive" component={Responsive}/>
            <Route exact path="/hoverfocus" component={HoverFocus}/>
            <Route exact path="/darkmode" component={Darkmode}/>
        </Switch>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
