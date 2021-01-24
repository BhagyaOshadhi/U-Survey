import thunk from  'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

const middleware = applyMiddleware(thunk);
