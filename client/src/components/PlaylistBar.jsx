import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const PlaylistBar = ({ playlist }) => {

  const [selectedPlaylist, setSelectedPlaylist] = useState('');

  const setFirstPlaylist = () => {

  }

  const handleClick = (event) => {
    event.preventDefault();
    console.log(event)
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
            key={i}
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