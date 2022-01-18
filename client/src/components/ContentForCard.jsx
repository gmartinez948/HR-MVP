import React from "react";
import ReactDOM from "react-dom";
import { CardContent, Typography } from "@mui/material/";

const ContentForCard = (media) => {
  return (
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {media.media.name}
      </Typography>
    </CardContent>
  );
};

export default ContentForCard;
