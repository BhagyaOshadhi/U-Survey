import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StoreProvider} from './Store';
// import * as serviceWorker from './serviceWorker';
import {Router,} from '@reach/router';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
// import Fav from './Fav';

const RouterPage = (props) => props.pageComponent
ReactDOM.render(
  <StoreProvider>
      <Router>
          <App path = '/'>
              <RouterPage pageComponent={<Home/>} path='/' />
              {/*<RouterPage pageComponent={<Fav/>} path='/faves' />*/}
          </App>
      </Router>
  </StoreProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
