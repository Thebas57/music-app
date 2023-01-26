import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { genres } from "../assets/constants";
import Error from "../components/Error";
import Loader from "../components/Loader";
import SongCard from "../components/SongCard";
import { useGetTopChartsQuery } from "../redux/services/Shazam";

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const [genreSelect, setGenreSelect] = useState("Pop");
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Chargement des musiques..." />;

  if (error) return <Error />;

  return (
    <div className="discover-container">
      <div className="discover-flex">
        <div className="discover-header">
          <h2>Discover {genreSelect}</h2>
        </div>
        <div className="select-genre">
          <select
            value={genreSelect}
            onChange={(e) => setGenreSelect(e.target.value)}
          >
            {genres.map((genre) => (
              <option key={genre.value} value={genre.title}>
                {genre.title}
              </option>
            ))}
          </select>
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
  );
};

export default Discover;
