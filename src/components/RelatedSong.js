import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TopTitreCard from "./TopTitreCard";

const RelatedSong = ({ activeSong, isPlaying, data, handlePause, handlePlay }) => {
  const dispatch = useDispatch();
  console.log(data);
  return (
    <div className="related-container">
      <span className="title">Titres similaires</span>
      {data?.map((song, i) => (
        <TopTitreCard
          key={i}
          song={song}
          i={i}
          isRelated={true}
          isPlaying={isPlaying}
          activeSong={activeSong}
          data={data}
          handlePause={handlePause}
          handlePlay={handlePlay}
        />
      ))}
    </div>
  );
};

export default RelatedSong;
