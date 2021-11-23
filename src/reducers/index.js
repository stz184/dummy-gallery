import galleryReducer from './gallery'
import favoritesReducer from './favorites'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  gallery: galleryReducer,
  favorites: favoritesReducer
})
export default allReducers
