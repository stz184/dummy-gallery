const initialState = {
  ids: []
};

const favoritesReducer = (state = initialState, action) => {
  const nextState = Object.assign({}, state);

  switch(action.type){
    case 'ADD':
      nextState.ids.push(action.payload);
      return nextState;
    case 'REMOVE':
      return nextState.ids.filter(id => id !== action.payload);
    default:
      return nextState;
  }
}
export default favoritesReducer
