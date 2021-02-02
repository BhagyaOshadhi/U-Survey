import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import One from './One';
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import FourPointOne from "./FourPointOne";
import NoMatch from "./NoMatch";
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
// import {browserHistory} from 'react-router'
ReactDOM.render(
    <Router >
        <Switch>
            <Route  exact path="/" component={App}/>
            <Route path="/One"component={One}/>
            <Route path="/Two" component={Two}/>
            <Route path="/Three" component={Three}/>
            <Route path="/Four" component={Four}/>
            <Route path="/Four/:id" component={FourPointOne} ></Route>
            <Route path="*" component={NoMatch}></Route>
        </Switch>

    </Router>


  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
