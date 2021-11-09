import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/auth.reducer';
import heroReducer from './hero/hero.reducer';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistAuthReducer,
  hero: heroReducer
});

export default rootReducer;
