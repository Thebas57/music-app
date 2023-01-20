import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const SongCard = ({ song }) => {
  console.log(song);
  return (
    <div className="song-card">
      <div className="img-song">
        <div className="pause">  
          <AiFillPlayCircle />
        </div>
        {song.images ? (
          <img src={song.images.coverart} alt="song" />
        ) : (
          <span>zefze</span>
        )}
      </div>
      <span className="title-song">{song.title}</span>
      <p>{song.subtitle}</p>
    </div>
  );
};

export default SongCard;
