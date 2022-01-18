import React from "react";
import ReactDOM from "react-dom";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Button,
  Paper,
  Box,
} from "@mui/material/";
import ContentForCard from "./ContentForCard.jsx";
const MediaCard = (media) => {
  return (
    <>
      <CardMedia
        component="img"
        height="140"
        image={media.media.album.images[0]["url"]}
        alt="album-photo"
      />
    </>
  );
};

export default MediaCard;
