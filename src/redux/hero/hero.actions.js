import { createAction } from '@reduxjs/toolkit';

const getHeroRequest = createAction('getHeroRequest');
const getHeroSuccess = createAction('getHeroSuccess');
const getHeroError = createAction('getHeroError');

export { getHeroRequest, getHeroSuccess, getHeroError };
