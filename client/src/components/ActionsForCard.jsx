import React, { useState } from "react";
import reactDOM from "react-dom";
import { CardActions, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ActionsForCard = ({ media, handleAddToFavsList }) => {
  const [isFavClicked, setFavClicked] = useState(false);

  // console.log(media);

  const favButtonClicked = (media) => {
    setFavClicked(!isFavClicked);
    handleAddToFavsList(media);
  };

  const favButtonUnclicked = () => {
    setFavClicked(!isFavClicked);
    console.log("favButtonUnclicked");
    // call the removefromfav function to remove it from the favorites section
  };

  return (
    <>
      <CardActions>
        {isFavClicked ? (
          <Button
            startIcon={
              <FavoriteIcon
                onClick={() => {
                  favButtonUnclicked(media);
                }}
              />
            }
          ></Button>
        ) : (
          <Button
            startIcon={
              <FavoriteBorderIcon
                onClick={() => {
                  favButtonClicked();
                }}
              />
            }
          ></Button>
        )}
      </CardActions>
    </>
  );
};

export default ActionsForCard;
