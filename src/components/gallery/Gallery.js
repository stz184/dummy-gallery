import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {getPhotos} from '../../actions/getPhotos';
import {addFavorites} from '../../actions/addFavorites';
import {useEffect} from 'react';
import Loader from 'react-loader-spinner';
import Thumbnail from '../thumbnail/Thumbnail';

const Gallery = ({setAlert}) => {
  const { id: albumID } = useParams();
  const dispatch = useDispatch();
  const {albums, photos, loading, error} = useSelector(state => state.gallery);
  const {ids: favorites} = useSelector(state => state.favorites);

  useEffect(() => {
    error && setAlert(['warning', error]);
  }, [error, setAlert])

  useEffect(() => {
    !Object.keys(photos).length && dispatch(getPhotos());
  }, [dispatch, photos]);

  useEffect(() => {
    if (Object.keys(albums).length && !albums[albumID]) {
      setAlert(['warning', 'Album not found']);
    }
  }, [albumID, albums, setAlert]);

  const onClickFavorites = (photoID) => {
    if (favorites.indexOf(photoID) > -1) {
      dispatch(addFavorites(favorites.filter(id => id !== photoID)));
    } else {
      dispatch(addFavorites([...favorites, photoID]));
    }
  }

  return (
    <>
      <h1 className="text-center">Album #{albumID}</h1>
      {!error && loading && (
          <div className="center-screen"><Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
          /></div>
      )}
      <div className="album-grid">
        {albums[albumID] && albums[albumID].map((photoID) => {
          return (
            <Thumbnail
              favorites={favorites}
              photo={photos[photoID]}
              onClickFavorites={onClickFavorites}
            />
          )
        })}
      </div>
    </>);
}

export default Gallery
