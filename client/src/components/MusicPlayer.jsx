import React from "react";
import ReactDOM from "react-dom";

export default function MusicPlayer(media){
  return (
    <div>
    <audio controls>
      <source src={media.media.preview_url} type="audio/mpeg">
    </audio>
    </div>
  );
};

