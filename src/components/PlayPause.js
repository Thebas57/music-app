import React from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

const PlayPause = ({ song, pause, play, isPlaying, activeSong }) => {
  if (isPlaying && activeSong?.title === song.title) {
    return <AiFillPauseCircle song={song} onClick={pause} />;
  } else {
    return <AiFillPlayCircle song={song} onClick={play} />;
  }
};

export default PlayPause;
