import { createAction } from '@reduxjs/toolkit';

const getHeroRequest = createAction('hero/getHeroRequest');
const getHeroSuccess = createAction('hero/getHeroSuccess');
const getHeroError = createAction('hero/getHeroError');

const getHeroIdRequest = createAction('hero/getHeroIdRequest');
const getHeroIdSuccess = createAction('hero/getHeroIdSuccess');
const getHeroIdError = createAction('hero/getHeroIdError');

const addHeroRequest = createAction('hero/addHeroRequest');
const addHeroSuccess = createAction('hero/addHeroSuccess');
const addHeroError = createAction('hero/addHeroError');

const deleteHeroRequest = createAction('hero/deleteHeroRequest');
const deleteHeroSuccess = createAction('hero/deleteHerosuccess');
const deleteHeroError = createAction('hero/deleteHeroError');

const updateHeroRequest = createAction('hero/updateHeroRequest');
const updateHeroSuccess = createAction('hero/updateHeroSuccess');
const updateHeroError = createAction('hero/updateHeroError');

export {
  getHeroRequest,
  getHeroSuccess,
  getHeroError,
  getHeroIdRequest,
  getHeroIdSuccess,
  getHeroIdError,
  addHeroRequest,
  addHeroSuccess,
  addHeroError,
  deleteHeroRequest,
  deleteHeroSuccess,
  deleteHeroError,
  updateHeroRequest,
  updateHeroSuccess,
  updateHeroError
};
