import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Loader from "../components/Loader";
import SongCard from "../components/SongCard";
import { useGetSongsBySearchQuery } from "../redux/services/Shazam";

const Search = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { search } = useParams();
  const { data, isFetching, error } = useGetSongsBySearchQuery(search);

  if (isFetching) return <Loader title="Chargement des musiques..." />;

  if (error) return <Error />;
  return (
    <div>
      <div className="discover-container">
        <div className="discover-flex">
          <div className="discover-header">
            <h2>Recherche : {search} </h2>
          </div>
        </div>
        <div className="discover-songs">
          {data?.tracks.hits.map((song, i) => (
            <SongCard
              key={song.track.key}
              song={song.track}
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

export default Search;
