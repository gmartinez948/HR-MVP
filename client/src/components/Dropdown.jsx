import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

import { 
    MenuItem, 
    InputLabel, 
    FormControl, 
    Select,
    Box
} from '@mui/material/';
import { PlayCircleFilledWhiteSharp, PlaylistAdd } from "@mui/icons-material";

const Dropdown = ({ media, handleGenreSearch }) => {

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

    const handleChange = async(media) => {
        setSelectedGenre(event.target.value);
        handleGenreSearch(selectedGenre);
    }

  return (
      <>
    <Box sx={{ minWidth: 120 }}>
        <FormControl style={{minWidth: 300}}>
        <InputLabel id="genre-input">Choose</InputLabel>
        <Select
          labelId="genre-dropdown"
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