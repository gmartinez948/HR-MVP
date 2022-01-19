import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

import { 
    MenuItem, 
    InputLabel, 
    FormControl, 
    Select,
    Box
} from '@mui/material/';

const Dropdown = ({media, handleGenreSearch}) => {

    const [selectedGenre, setSelectedGenre] = useState('');

    const setFirstGenre = () => {
        console.log('inside of setFirstGenre', media)
        for (var key in media[0]) {
          return setSelectedGenre(media[0]['id'])
        }
      }

    useEffect(() => {
    setFirstGenre()
    }, [media])

    console.log("this is the media", media)
    console.log(selectedGenre)

    const handleChange = async(media) => {
        setSelectedGenre(event.target.value);
        handleGenreSearch(selectedGenre);
    }

  return (
      <>
    <Box sx={{ minWidth: 120 }}>
        <FormControl MidWidth>
        <InputLabel id="playlist-or-genre-input">Choose</InputLabel>
        <Select
          labelId="playlist-or-genre-dropdown"
          id="dropdown"
          value=""
          label="Choose"
          onChange={handleChange}
        >
            {media.map((m, i) => {
                return (
                <MenuItem value={m.id}>{m.id}</MenuItem>
                )
            })};
        </Select>
        </FormControl>
    </Box>
    </>
  );
}

export default Dropdown;