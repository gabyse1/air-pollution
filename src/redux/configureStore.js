import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import citiesReducer from './cities/citiesReducer';
import forecastReducer from './forecast/forecastReducer';

const rootReducer = combineReducers({
  citiesReducer,
  forecastReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;
