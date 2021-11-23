import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {getPhotos} from '../../actions/getPhotos';
import {useEffect, useState} from 'react';


const Gallery = ({setAlert}) => {
  const { id: albumID } = useParams();
  const dispatch = useDispatch();
  const {albums, photos} = useSelector(state => state.gallery);

  useEffect(() => {
    !Object.keys(photos).length && dispatch(getPhotos());
  }, [dispatch, photos]);

  useEffect(() => {
    if (Object.keys(albums).length && !albums[albumID]) {
      setAlert(['warning', 'Album not found']);
    }
  }, [albumID, albums, setAlert])

  const [favorites, setFavorites] = useState({});

  const onClickFavorites = (photoID) => {
    setFavorites((prevState) => {
      const currentState = !!prevState[photoID];

      return {
        ...prevState,
        [photoID]: !currentState
      }
    });
  }

  return (
    <>
      <h1 className="text-center">Album #{albumID}</h1>
      <div className="album-grid">
        {albums[albumID] && albums[albumID].map((photoID) => {
          return (
            <div key={photoID} className='thumbnail'>
              <img src={photos[photoID].thumbnailUrl} alt={photos[photoID].title} />
              <i className={`bi bi-bookmark-heart
              ${favorites[photoID] ? '-fill' : ''} fav`} onClick={() => onClickFavorites(photoID)}/>
              <p className="text-center">{photos[photoID].title}</p>
            </div>
          )
        })}
      </div>
    </>);
}

export default Gallery
