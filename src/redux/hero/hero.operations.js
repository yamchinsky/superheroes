import axios from 'axios';
import {
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
} from './hero.actions';

axios.defaults.baseURL = 'http://localhost:4000/api/v1/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  }
};

// GET @ /hero
const getHero = () => async (dispatch, getState) => {
  dispatch(deleteHeroRequest());
  const authToken = getState().auth.token;
  token.set(authToken);
  try {
    const { data } = await axios.get('/hero');

    dispatch(getHeroSuccess(data));
  } catch (error) {
    dispatch(getHeroError(error.message));
  }
};

// GET @ /hero/:id
const getHeroById = () => async dispatch => {
  dispatch(getHeroIdRequest());

  try {
    const { data } = await axios.get('/hero/:id');

    dispatch(getHeroIdSuccess(data));
  } catch (error) {
    dispatch(getHeroIdError(error.message));
  }
};

//POST @ /hero
const addHero = info => async dispatch => {
  dispatch(addHeroRequest());
  const hero = {
    info
  };

  dispatch(addHeroRequest());
  await axios
    .post('/hero', hero)
    .then(({ data }) => dispatch(addHeroSuccess(data)))
    .catch(error => dispatch(addHeroError(error.message)));
};

// DELETE @ /hero/:id
const deleteHero = id => async dispatch => {
  dispatch(getHeroRequest());

  await axios
    .delete(`/hero/${id}`)
    .then(() => dispatch(deleteHeroSuccess(id)))
    .catch(error => dispatch(deleteHeroError(error.message)));
};

// PUT @ /hero/:id
const updateHero = values => async (dispatch, getState) => {
  console.log(values);
  dispatch(updateHeroRequest());
  try {
    const id = getHeroById(getState());
    const res = await axios.put(`/hero/${id}`, values);
    dispatch(updateHeroSuccess(res.data));
  } catch (error) {
    dispatch(updateHeroError(error.message));
  }
};

export { getHero, getHeroById, addHero, deleteHero, updateHero };
