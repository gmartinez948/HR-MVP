import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const TracksList = ({ tracks }) => {

  const addToFavorites = async(track, artists, album, preview) => {
    try {
      const song = {
        song: track,
        artists: artists,
        album: album,
        preview: preview
      }
      console.log(song);
      const postSong = await axios.post('/songs', song)
      return postSong
    }catch(err) {
      console.log(err)
    }

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
          <button onClick={() => {addToFavorites(t.name, t.artists, t.album.name, t.preview_url)}}>Add to Favorites</button>
          </>
        )
      })}
    </div>
  )
}

export default TracksList;