import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Genrebar from "./components/GenreBar.jsx";
import PlaylistBar from "./components/PlaylistBar.jsx";
import axios from "axios";
import { client_id, client_secret } from "../../config.js";
import TracksList from "./components/TracksList.jsx";
import FavoritesList from "./components/FavoritesList.jsx";
import AppBar from "./components/AppBar.jsx"

const App = () => {
  const [newGenre, setNewGenre] = useState("");
  const [favSongs, setFavSongs] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [spotifyToken, setSpotifyToken] = useState("");
  const [genres, setGenres] = useState([]);
  const [playlistId, setPlaylistId] = useState("");
  const [tracks, setTracks] = useState([]);
  const [isFavClicked, setIsFavClicked] = useState(false);

  // console.log('these are the fav songs', favSongs);
  console.log("these are the tracks", tracks);
  console.log("these are the playlists", playlist);
  console.log("these are the genres", genres);


  const getGenres = async () => {
    try {
      const getToken = await axios("https://accounts.spotify.com/api/token", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + btoa(client_id + ":" + client_secret),
        },
        data: "grant_type=client_credentials",
        method: "POST",
      });
      setSpotifyToken(getToken.data.access_token);
      const getGenres = await axios.get(
        "https://api.spotify.com/v1/browse/categories?locale=sv_US",
        {
          headers: {
            Authorization: "Bearer " + getToken.data.access_token,
          },
        }
      );
      await setGenres(getGenres.data.categories.items);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getGenres();
  }, []);

  const handleGenreSearch = async (genre) => {
    console.log("genre", genre);
    try {
      await setNewGenre(genre);
      const getPlaylists = await axios.get(
        `https://api.spotify.com/v1/browse/categories/${genre}/playlists?limit=10`,
        {
          headers: { Authorization: "Bearer " + spotifyToken },
        }
      );
      await setPlaylist(getPlaylists.data.playlists.items);
      await console.log(playlist);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePlaylistSearch = async (playlist_id) => {
    try {
      const getTracks = await axios.get(
        `https://api.spotify.com/v1/playlists/${playlist_id}/tracks?limit=10`,
        {
          headers: { Authorization: "Bearer " + spotifyToken },
        }
      );
      const setTracksState = await Promise.all(
        getTracks.data.items.map((t) => {
          return t.track;
        })
      );
      await setTracks(setTracksState);
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoToFavsClicked = () => {
    setIsFavClicked(!isFavClicked);
  };

  const handleAddToFavsList = (track) => {
    console.log("this is the favorite button that is clicked", track);
    const copyOfFavSongs = favSongs;
    copyOfFavSongs.push(track);
    setFavSongs(copyOfFavSongs);
  };

  // write a function to delete an item from the favorites list if the fav butto is unclicked.

  return (
    <div>
      <AppBar handleGoToFavsClicked={handleGoToFavsClicked}/>
      {genres.length > 0 && !isFavClicked && (
        <>
          <Genrebar genres={genres} handleGenreSearch={handleGenreSearch} />
          <PlaylistBar
            playlist={playlist}
            handlePlaylistSearch={handlePlaylistSearch}
            setPlaylistId={setPlaylistId}
          />
        </>
      )}
      {tracks.length > 0 && !isFavClicked && (
        <>
          <h3>Tracks</h3>
          <TracksList
            tracks={tracks}
            handleAddToFavsList={handleAddToFavsList}
          />
        </>
      )}
      {isFavClicked && (
        <FavoritesList
          favSongs={favSongs}
          isFavClicked={isFavClicked}
          setIsFavClicked={setIsFavClicked}
        />
      )}
    </div>
  );
};

export default App;
