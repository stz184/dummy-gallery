import {ADD_FAVORITES} from '../actions/addFavorites';

const initialState = {
  ids: []
};

const favoritesReducer = (state = initialState, action) => {
  const nextState = Object.assign({}, state);

  switch(action.type){
    case ADD_FAVORITES:
      nextState.ids = action.IDs;
      return nextState;
    default:
      return state;
  }
}
export default favoritesReducer
