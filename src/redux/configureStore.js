import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import citiesReducer from './city/citiesReducer';
import pollutionReducer from './pollution/pollutionReducer';

const rootReducer = combineReducers({
  citiesReducer,
  pollutionReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;
