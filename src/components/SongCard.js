import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import PlayPause from "./PlayPause";

const SongCard = ({ song, activeSong, isPlaying, i, data }) => {

  const dispatch = useDispatch();

  const handlePause = () => {
    dispatch(playPause(false));
  };

  const handlePlay = () => {
    console.log("play", song, activeSong, i, isPlaying);
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="song-card">
      <div className="img-song">
        <div
          className={
            isPlaying && activeSong?.title === song.title
              ? "pause active-song"
              : "pause"
          }
        >
          <PlayPause
            song={song}
            pause={handlePause}
            play={handlePlay}
            activeSong={activeSong}
            isPlaying={isPlaying}
          />
        </div>
        {song.images ? (
          <img src={song.images.coverart} alt="song" />
        ) : (
          <span>zefze</span>
        )}
      </div>
      <NavLink
        className="navLink navTitle"
        key={song.name}
        to={"/song/" + song.key}
        exact
      >
        <span className="title-song">{song.title}</span>
      </NavLink>
      <NavLink
        className="navLink navTitle"
        key={song.name}
        to={song.artists ? "/artist/" + song.artists[0].adamid : "/top-artists"}
        exact
      >
        <p>{song.subtitle}</p>
      </NavLink>
    </div>
  );
};

export default SongCard;
