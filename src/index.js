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
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {browserHistory} from 'react-router'
ReactDOM.render(
    <Router history={browserHistory}>
        <div>
            <ul>
                <li><Link to="/">App</Link></li>
                <li><Link to="/one">One</Link></li>
                <li><Link to="/two">Two</Link></li>
                <li><Link to="/three">Three</Link></li>
                <li><Link to="/four">Four</Link></li>

            </ul>
            <hr/>
            <Route exact path="/" component={App}/>
            <Route exact path="/One" component={One}/>
            <Route exact path="/two" component={Two}/>
            <Route exact path="/three" component={Three}/>
            <Route exact path="/four" component={Four}>
                <Route exact path="/four/:id" component={FourPointOne}/>
            </Route>
            < Route path="*" component={NoMatch}/>
        </div>
    </Router>


  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
