import React from "react";
import ArtistCard from "../components/ArtistCard";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { useGetTopChartsQuery } from "../redux/services/Shazam";

const TopArtist = () => {

  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Chargement des artistes..." />;

  if (error) return <Error />;

  return (
    <div className="discover-container">
      <div className="discover-flex">
        <div className="discover-header">
          <h2>Top Artists</h2>
        </div>
      </div>
      <div className="discover-songs">
        {data?.map((song) => (
          <ArtistCard
            key={song.key}
            song={song}
          />
        ))}
      </div>
    </div>
  );
};

export default TopArtist;
