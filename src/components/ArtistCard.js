import React from "react";
import { NavLink } from "react-router-dom";

const ArtistCard = ({ song }) => {
  return (
    <div className="artist-card">
      <div className="img-artist">
        {song.images ? (
          <img src={song.images.coverart} alt="song" />
        ) : (
          <span>zefze</span>
        )}
      </div>
      <NavLink
        className="navLink navTitle"
        key={song.name}
        to={song.artists ? "/artist/" + song.artists[0].adamid : "/top-artists"}
        exact
      >
        <span className="title-song">{song.subtitle}</span>
      </NavLink>
    </div>
  );
};

export default ArtistCard;
