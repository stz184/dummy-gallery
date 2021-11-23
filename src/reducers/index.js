import galleryReducer from './gallery'
import favoritesReducer from './favorites'
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favorites',
  storage: storage,
  whitelist: ['favorites']
};

const allReducers = persistCombineReducers(persistConfig, {
  gallery: galleryReducer,
  favorites: favoritesReducer
})
export default allReducers
