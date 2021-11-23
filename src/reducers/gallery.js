import {GET_PHOTOS_LOADING, GET_PHOTOS_SUCCESS, GET_PHOTOS_ERROR} from '../actions/getPhotos';

const initialState = {
  loading: false,
  error: false,
  photos: {},
  albums: {}
};

const galleryReducer = (state = initialState, action) => {
  const nextState = Object.assign({}, state);

  switch(action.type){
    case GET_PHOTOS_LOADING:
      nextState.loading = true;
      return nextState;

    case GET_PHOTOS_ERROR:
      nextState.error = action.error;
      return nextState;

    case GET_PHOTOS_SUCCESS:
      nextState.loading = false;

      nextState.albums = {};
      nextState.photos = {};

      action.payload.forEach((p) => {
        nextState.photos[p.id] = p;
        if (typeof nextState.albums[p.albumId] === 'undefined') {
          nextState.albums[p.albumId] = [];
        }
        nextState.albums[p.albumId].push(p.id);
      });

      return nextState;

    default:
      return state
  }
}
export default galleryReducer;
