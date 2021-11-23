import {useDispatch, useSelector} from 'react-redux';
import {getPhotos} from '../../actions/getPhotos';
import {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import Loader from 'react-loader-spinner';

const Albums = ({setAlert}) => {
  const dispatch = useDispatch();
  const {albums, photos, loading, error} = useSelector(state => state.gallery);

  useEffect(() => {
    error && setAlert(['warning', error]);
  }, [error, setAlert])

  useEffect(() => {
    !Object.keys(photos).length && dispatch(getPhotos());
  }, [dispatch, photos]);

  return (
    <>
      <h1 className="text-center">Wonderful Galleries</h1>

      {!error && loading && (
          <div className="center-screen"><Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000}
          /></div>
      )}

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
