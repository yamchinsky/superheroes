import axios from 'axios';
import { getHeroRequest, getHeroSuccess, getHeroError } from './hero.actions';

axios.defaults.baseURL = 'http://localhost:4000/api/v1/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  }
};

const getHero = () => async (dispatch, getState) => {
  dispatch(getHeroRequest());
  const authToken = getState().auth.token;
  token.set(authToken);
  try {
    const { data } = await axios.get('/hero');

    dispatch(getHeroSuccess(data));
  } catch (error) {
    dispatch(getHeroError(error.message));
  }
};

export { getHero };
