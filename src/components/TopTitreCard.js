import React from "react";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useDispatch } from "react-redux";

const TopTitreCard = ({ song, activeSong, isPlaying, i, data }) => {
  const dispatch = useDispatch();

  i = i + 1;
  const handlePause = () => {
    console.log("pause", song, activeSong, i, isPlaying);
    dispatch(playPause(false));
  };

  const handlePlay = () => {
    console.log("play", song, activeSong, i, isPlaying);
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="titre-card">
      <span className="top">{i}.</span>
      {song.images ? (
        <img src={song.images.coverart} alt="song" />
      ) : (
        <span>zefze</span>
      )}
      <div className="info-tp-title">
        <span className="title-titre">{song.title}</span>
        <span className="title-artist">{song.subtitle}</span>
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
