import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/lib/storage/session';
import registerReducer from './RegisterBusiness/register-business.reducer';
import userReducer from './User/user.reducer';
import businessReducer from './Business/business.reducer';
import coordReducer from './Coordinates/coordinates.reducer';

const persistConfig = {
  key: 'root',
  storage: persistStore,
  whitelist: ['user', 'register', 'business', 'coord']
};

const rootReducer = combineReducers({
  user: userReducer,
  register: registerReducer,
  business: businessReducer,
  coord: coordReducer
});

export default persistReducer(persistConfig, rootReducer);