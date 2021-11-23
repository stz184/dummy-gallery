export const ADD_FAVORITES = 'ADD_FAVORITES';

export const addFavorites = (IDs) => {
  return { type: ADD_FAVORITES, IDs };
};
