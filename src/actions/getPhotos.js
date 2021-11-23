export const GET_PHOTOS_LOADING = 'GET_PHOTOS_LOADING';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_ERROR = 'GET_PHOTOS_ERROR';

export const getPhotos = () => dispatch => {
  dispatch({ type: GET_PHOTOS_LOADING });

  fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(
        data => dispatch({ type: GET_PHOTOS_SUCCESS, payload: data }),
        error => dispatch({ type: GET_PHOTOS_ERROR, error: error.message || 'Unexpected Error!' })
      );
};
