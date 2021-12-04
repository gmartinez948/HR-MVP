import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Moodbar from './components/Moodbar.jsx'
import axios from 'axios';
import { client_id, client_secret } from '../../config.js';


const App = () => {
  const [mood, setMood] = useState('');
  const [favSongs, setFavSongs] = useState([]);
  const [moodPlaylist, setMoodPlaylist] = useState([]);
  const [spotifyToken, setSpotifyToken] = useState('');
  const [genres, setGenres] = useState([]);
  // add boolean state for favsongsclicked
  // console.log(spotifyToken)


  const handleMoodChange = (mood) => {
    console.log('app mood', mood)
  }

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




  return (
    <div>
    {genres &&
    <>
      <h1>Moodify</h1>
      <Moodbar mood={mood} genres={genres}/>
    </>
      }
    </div>
  )

}

export default App;