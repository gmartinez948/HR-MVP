import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Grid, Paper, Card, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import MediaCard from "./MediaCard.jsx";
import ContentForCard from "./ContentForCard.jsx";
import ActionsForCard from "./ActionsForCard.jsx";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: "18px",
  backgroundColor: "#90ee90",
  color: theme.palette.text.secondary,
  elevation: 2,
  maxWidth: "345px",
  spacing: 2,
  borderRadius: "29px",
}));

const TracksList = ({ tracks, handleAddToFavsList }) => {
  console.log("this is the handleAddToFavs button", handleAddToFavsList);
  const addToFavoritesDb = async (track, artists, album, preview) => {
    try {
      // const song = {
      //   song: track,
      //   artists: artists,
      //   album: album,
      //   preview: preview
      // }
      // console.log(song);
      const postSong = await axios.get("/f");
      return postSong;
    } catch (err) {
      console.log(err);
    }
  };

  const addToFavoritesList = (track) => {
    // for (var i = 0; i < tracks.length; i++) {
    //   if (track.id === tracks[i].id) {
    //     handleAddToFavsList(track);
    //     break;
    //   }
    // }
    handleAddToFavsList(track);
  };

  console.log("tracklist", tracks);
  return (
    <Box
      className="Overall-Box-Grid"
      sx={{
        marginTop: "45px",
        marginLeft: "50px",
        flexGrow: 1,
      }}
    >
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "50px" }}
      >
        {tracks.map((t) => {
          return (
            <>
              {/* <Grid
                className="Individual-Grid"
                sx={{ display: "flex", "max-width": "31.666667%" }}
                item
                xs={8}
              > */}
              <Item>
                <Card sx={{ maxWidth: 345 }} raised={true}>
                  <MediaCard media={t} />
                  <ContentForCard media={t} />
                  {t.preview_url ? (
                    <audio controls>
                      <source src={t.preview_url} type="audio/mpeg" />
                    </audio>
                  ) : (
                    <p>No Preview Available</p>
                  )}
                  <ActionsForCard
                    media={t}
                    handleAddToFavsList={handleAddToFavsList}
                  />
                </Card>
              </Item>
              {/* </Grid> */}
            </>
          );
        })}
      </Grid>
    </Box>
  );
};

// const AccordianSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 50vh;
//   background: rgba(200, 200, 200, 0.5)
//   width: 75%
//   border: solid;
//   font-size: 15px;
//   outline: none;
//   overflow-y: scroll;
//   overflox-x: scroll;
// `;

export default TracksList;
