import {useDispatch, useSelector} from 'react-redux';
import {getPhotos} from '../../actions/getPhotos';
import {useEffect} from 'react';
import {NavLink} from 'react-router-dom';


const Albums = ({setAlert}) => {
  const dispatch = useDispatch();
  const {albums, photos} = useSelector(state => state.gallery);

  useEffect(() => {
    !Object.keys(photos).length && dispatch(getPhotos());
  }, [dispatch, photos]);

  return (
    <>
      <h1 className="text-center">Wonderful Galleries</h1>
      <div className="container-fluid album-grid">
        {Object.keys(albums).map((albumID) => {
          return (
              <div key={albumID} className='thumbnail'>
                <NavLink to={`/gallery/${albumID}`}>
                  <img src={photos[albums[albumID][0]].thumbnailUrl} alt='Click to view the album' />
                  <p className="text-center">
                    Gallery ID# {albumID}
                  </p>
                </NavLink>
              </div>
          )
        })}

      </div>
    </>);
}

export default Albums
