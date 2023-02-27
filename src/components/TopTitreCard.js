import React from "react";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const TopTitreCard = ({ song, activeSong, isPlaying, i, data, isRelated }) => {
  const dispatch = useDispatch();

  i = i + 1;
  const handlePause = () => {
    dispatch(playPause(false));
  };

  const handlePlay = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className={isRelated ? "titre-card isRelated" : "titre-card"}>
      <span className="top">{i}.</span>
      {song.images ? <img src={song.images.coverart} alt="song" /> : <p></p>}
      <div className="info-tp-title">
        <NavLink
          className="navLink"
          key={song.name}
          to={"/song/" + song.key}
          exact
        >
          <span className="title-titre">{song.title}</span>
        </NavLink>

        <span className="title-artist">{song.subtitle}</span>
        {!song.images && <h6>Api Payante pour ces informations</h6>}
      </div>
      <PlayPause
        song={song}
        pause={handlePause}
        play={handlePlay}
        activeSong={activeSong}
        isPlaying={isPlaying}
      />
    </div>
  );
};

export default TopTitreCard;
