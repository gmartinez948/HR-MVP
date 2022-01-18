import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const FavoritesList = ({ favSongs, setIsFavClicked, isFavClicked }) => {

  const goBack = () => {
    setIsFavClicked(!isFavClicked)
  }

  return (
      <div>
        <button onClick={() => {goBack()}}>Go Back</button>
        <div>
        {favSongs.map(t => {
          return (
            <>
            <dl>
              <dt>Song: {t.name}</dt>
              {t.artists.map(a => {
                return(
                  <dd><h6>Artist: {a.name}</h6></dd>
                )
              })}
              <dd>Album: {t.album.name}</dd>
            </dl>
            <audio controls>
              <source src={t.preview_url} type="audio/mpeg"/>
            </audio>
            </>
          )
        })}
        </div>
      </div>
  )
}

export default FavoritesList;