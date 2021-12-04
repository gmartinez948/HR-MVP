import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Genrebar from './components/GenreBar.jsx';
import PlaylistBar from './components/PlaylistBar.jsx';
import axios from 'axios';
import { client_id, client_secret } from '../../config.js';
import TracksList from './components/TracksList.jsx';


const App = () => {

  const [newGenre, setNewGenre] = useState('');
  const [favSongs, setFavSongs] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [spotifyToken, setSpotifyToken] = useState('');
  const [genres, setGenres] = useState([]);
  const [playlistId, setPlaylistId] = useState('');
  const [tracks, setTracks] = useState([]);
  // add boolean state for favsongsclicked

  const getGenres = async() => {
    try {
      const getToken = await axios('https://accounts.spotify.com/api/token', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
      })
      setSpotifyToken(getToken.data.access_token)
      const getGenres = await axios.get('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
        headers: {
          'Authorization': 'Bearer ' + getToken.data.access_token
        }
      })
      await setGenres(getGenres.data.categories.items);
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getGenres();
  }, [])

  const handleGenreSearch = async(genre) => {
    console.log('genre', genre);
    try {
      await setNewGenre(genre);
      const getPlaylists = await axios.get(`https://api.spotify.com/v1/browse/categories/${genre}/playlists?limit=10`, {
        headers: { Authorization: 'Bearer ' + spotifyToken}
      })
      await setPlaylist(getPlaylists.data.playlists.items);
    } catch(err) {
      console.log(err);
    }
  }

  const handlePlaylistSearch = async(playlist_id) => {
   try {
     const getTracks = await axios.get(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks?limit=10`, {
      headers: { Authorization: 'Bearer ' + spotifyToken }
     })
     const setTracksState = await Promise.all(getTracks.data.items.map(t => {
       return t.track;
     }))
     await setTracks(setTracksState)
   } catch(err) {
     console.log(err);
   }
  }

  return (
    <div>
    {genres.length > 0 &&
    <>
      <h1>Moodify</h1>
      <button>Go To Favorites</button>
      <Genrebar genres={genres}
      handleGenreSearch={handleGenreSearch}/>
      <PlaylistBar playlist={playlist}
      handlePlaylistSearch={handlePlaylistSearch}
      setPlaylistId={setPlaylistId}
      />
    </>
    }
    {tracks.length > 0 &&
    <>
    <h3>Tracks</h3>
    <TracksList tracks={tracks}/>
    </>
    }
    </div>
  )

}

export default App;