import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducer from './reducers/reducers';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {createLogger} from 'redux-logger';

const logger = createLogger({
    /* https://github.com/evgenyrodionov/redux-logger */
    collapsed: true,
    diff: true
});


const initialState = {};


const store = createStore(
  combineReducer,
  initialState,
  compose(
    composeWithDevTools(applyMiddleware(thunk, logger))  
  )
);

export default store;