import React from 'react'

const Artist = ({ location }) => {
  const {
    state: {
      artistInfo: { name },
      artistInfo: { cover },
      artistInfo: { bio },
      artistInfo: { albums }
    }
  } = location

  return (
    <div className='banner'>
      <div className='main_cover'>
        <div className='logo'>{name}</div>
      </div>
      <span></span>
      <div>
        <div className='artist_bio'>
          <div className='avatar'>
            <span
              style={{
                background: `url('/images/covers/${cover}.jpg') no-repeat`
              }}
            ></span>
          </div>
          <div className='bio'>
            <h3>{name}</h3>
            <div className='bio_text'>{bio}</div>
          </div>
          <AlbumList albumList={albums} />
        </div>
      </div>
    </div>
  )
}

const AlbumList = ({ albumList }) => {
  const showList = albums =>
    albums
      ? albums.map((album, index) => {
          return (
            <img
              key={index}
              src={`/images/albums/${album.cover}.jpg`}
              alt={'cover-album'}
            />
          )
        })
      : null
  return <div className='albums_list'>{showList(albumList)}</div>
}

export default Artist
