const Thumbnail = ({photo, favorites, onClickFavorites}) => {
  return (
    <div key={photo.id} className='thumbnail'>
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <i className={`bi bi-bookmark-heart${favorites.indexOf(photo.id) > -1 ? '-fill' : ''} fav`}
         onClick={() => onClickFavorites(photo.id)}/>
      <p className="text-center">{photo.title}</p>
    </div>
  )
}

export default Thumbnail;
