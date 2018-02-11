import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers';

const initialState = {
  selected: {},
  data: [],
  page: 1
};

export default createStore(
  combineReducers({
    ...reducers
  }),
  initialState,
  applyMiddleware(logger)
);

