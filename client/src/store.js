import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducer from './reducers/reducers';

const initialState = {};

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducer,
  initialState,
  composeEnhancers(compose(
    applyMiddleware(...middleware)  
  ))
);

export default store;