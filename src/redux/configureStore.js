import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import citiesReducer from './cities/citiesReducer';
import pollutionReducer from './pollution/pollutionReducer';
import forecastReducer from './forecast/forecastReducer';

const rootReducer = combineReducers({
  citiesReducer,
  pollutionReducer,
  forecastReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;
