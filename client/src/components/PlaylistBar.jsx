import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const PlaylistBar = ({ playlist, handlePlaylistSearch }) => {

  const [selectedPlaylist, setSelectedPlaylist] = useState('');



  const setFirstPlaylist = () => {
    for (var key in playlist[0]) {
      return setSelectedPlaylist(playlist[0]['id'])
    }
  }

  useEffect(() => {
    setFirstPlaylist()
  }, [playlist])

  // const handleChange = (e) => {
  //   console.log('this is e', e)
  //   setSelectedPlaylist(e.target.value)
  // }

  console.log(playlist)

  const handleClick = (event) => {
    event.preventDefault();
    handlePlaylistSearch(selectedPlaylist)
    // console.log(selectedPlaylist)
  }








  return (
    <div>
    {playlist &&
    <>
    <h4>Choose a Playlist</h4>
      <form onSubmit={handleClick}>
        <select
        onChange={() => setSelectedPlaylist(event.target.value)}
        >
          {playlist.map((p, i) => {
          return (
            <option
            key={p.id}
            value={p.id}
            >{p.description}</option>
          )
        })}
        </select>
        <button type="submit">Choose Playlist</button>
      </form>
      </>}
     </div>
  )
}

export default PlaylistBar;