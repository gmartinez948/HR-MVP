import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Moodbar = ({ genres, handleMoodChange }) => {

  console.log(genres)


  const [selectedMood, setSelectedMood] = useState('');

  const handleChange = (e) => {
    console.log('this is e', e)
    setSelectedMood(e.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault();
    handleMoodChange(selectedMood);
  }

  return (
    <div>
      <h2>How you feelin?</h2>
      <form onSubmit={handleClick}>
        <select
        onChange={() => setSelectedMood(event.target.value)}
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
    </div>
  )
}

export default Moodbar;