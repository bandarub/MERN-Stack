import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducer from './reducers/reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  combineReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)  
  )
);

export default store;