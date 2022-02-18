import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Dropdown from "./Dropdown.jsx";

const Genrebar = ({ genres, handleGenreSearch, setPlaylistId }) => {
  return (
    <div>
    <h2>Choose a Genre</h2>
    <Dropdown 
    handleGenreSearch={handleGenreSearch}
    media={genres}/>
     </div>
  )
}

export default Genrebar;