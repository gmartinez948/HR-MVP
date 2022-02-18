import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Dropdown from "./Dropdown.jsx";
import { 
  MenuItem, 
  InputLabel, 
  FormControl, 
  Select,
  Box
} from '@mui/material/';

const PlaylistBar = ({ playlist, handlePlaylistSearch }) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState("");

  const setFirstPlaylist = () => {
    for (var key in playlist[0]) {
      return setSelectedPlaylist(playlist[0]["id"]);
    }
  };

  useEffect(() => {
    setFirstPlaylist();
  }, [playlist]);

  const handleClick = (event) => {
    event.preventDefault();
    handlePlaylistSearch(selectedPlaylist);
  };
  console.log('this is the playlist', playlist)
  return (
    <div>
      {playlist && (
        <Box sx={{ minWidth: 120 }}>
            <FormControl style={{minWidth: 300}}>
            <InputLabel id="playlist-input">Choose</InputLabel>
            <Select
              labelId="playlist-dropdown"
              id="dropdown"
              value=""
              label="Choose"
              onChange={handleClick(event)}
            >
                {playlist.map((p, i) => {
                    return (
                    <MenuItem value={p.id}>{p.description}</MenuItem>
                    )
                })};
            </Select>
            </FormControl>
        </Box>
      )}
    </div>
  );
};

export default PlaylistBar;
