import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducer from './reducers/reducers';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';


const initialState = {};

const middleware = [thunk];


const store = createStore(
  combineReducer,
  initialState,
  compose(
    composeWithDevTools(...middleware)
  
  )
);

export default store;