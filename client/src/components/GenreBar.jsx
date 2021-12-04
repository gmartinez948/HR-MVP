import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Genrebar = ({ genres, handleGenreSearch, setPlaylistId }) => {

  const [selectedGenre, setSelectedGenre] = useState('');

  const setFirstGenre = () => {
    for (var key in genres[0]) {
      return setSelectedGenre(genres[0]['id'])
    }
  }

  useEffect(() => {
    setFirstGenre()
  }, [genres])

  const handleChange = (e) => {
    console.log('this is e', e)
    setSelectedGenre(e.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault();
    handleGenreSearch(selectedGenre);
  }

  return (
    <div>
    {selectedGenre &&
    <>
    <h4>Choose a Genre</h4>
      <form onSubmit={handleClick}>
        <select
        onChange={() => setSelectedGenre(event.target.value)}
        >
          {genres.map((g, i) => {
          return (
            <option
            key={i}
            >{g.id}</option>
          )
        })}
        </select>
        <button type="submit">Submit Genre</button>
      </form>
      </>}
     </div>
  )
}

export default Genrebar;