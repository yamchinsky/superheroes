import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { getHeroSuccess } from './hero.actions';

const items = createReducer([], {
  [getHeroSuccess]: (_, { payload }) => [...payload]
});

const heroReducer = combineReducers({
  items
});

export default heroReducer;
