import React from "react";
import { useSelector } from "react-redux";
import Error from "../components/Error";
import Loader from "../components/Loader";
import SongCard from "../components/SongCard";
import { useGetTopChartsQuery } from "../redux/services/Shazam";

const TopCharts = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Chargement des musiques..." />;

  if (error) return <Error />;
  return (
    <div>
      <div className="discover-container">
        <div className="discover-flex">
          <div className="discover-header">
            <h2>Top Charts</h2>
          </div>
        </div>
        <div className="discover-songs">
          {data?.map((song, i) => (
            <SongCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCharts;
