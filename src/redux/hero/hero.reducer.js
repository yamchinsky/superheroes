import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  getHeroSuccess,
  addHeroSuccess,
  deleteHeroSuccess,
  updateHeroSuccess,
  getHeroIdSuccess
} from './hero.actions';

const items = createReducer([], {
  [getHeroSuccess]: (_, { payload }) => [...payload],
  [getHeroIdSuccess]: (_, { payload }) => [...payload],
  [addHeroSuccess]: (state, { payload }) => [...state, payload],
  [deleteHeroSuccess]: (state, { payload }) => [
    ...state.filter(hero => hero._id !== payload._id)
  ],
  [updateHeroSuccess]: (state, { payload }) =>
    state.map(hero => (hero.id === payload.id ? payload : hero))
});

const heroReducer = combineReducers({
  items
});

export default heroReducer;
