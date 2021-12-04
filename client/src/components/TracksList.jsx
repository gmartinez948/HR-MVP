import React from 'react';
import ReactDOM from 'react-dom';

const TracksList = ({ tracks }) => {

  const addToFavorites = (track, artists, album, preview) => {
    console.log(track, artists, album);
    //
  }

  console.log('tracklist', tracks)
  return (
    <div>
      {tracks.map(t => {
        return (
          <>
          <dl>
            <dt>Song: {t.name}</dt>
            {t.artists.map(a => {
              return(
                <dd><h6>Artist: {a.name}</h6></dd>
              )
            })}
            <dd>Album: {t.album.name}</dd>
          </dl>
          <audio controls>
            <source src={t.preview_url} type="audio/mpeg"/>
          </audio>
          <button onClick={() => {addToFavorites(t.name, t.artists, t.album.name, t.preview.url)}}>Add to Favorites</button>
          </>
        )
      })}
    </div>
  )
}

export default TracksList;