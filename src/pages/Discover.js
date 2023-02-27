import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { genres } from "../assets/constants";
import Error from "../components/Error";
import Loader from "../components/Loader";
import SongCard from "../components/SongCard";
import { selectGenreListId } from "../redux/features/playerSlice";
import {
  useGetSongsByGenreQuery,
} from "../redux/services/Shazam";

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, genreListId } = useSelector(
    (state) => state.player
  );

  const [genreSelect, setGenreSelect] = useState("Pop");
  const { data, isFetching, error } = useGetSongsByGenreQuery(
    genreListId === "" ? "POP" : genreListId
  );

  const genreTitle = genres.find(({value}) => value === genreListId)?.title

  if (isFetching) return <Loader title="Chargement des musiques..." />;

  if (error) return <Error />;

  return (
    <div className="discover-container">
      <div className="discover-flex">
        <div className="discover-header">
          <h2>Discover {genreTitle === undefined ? "Pop" : genreTitle}</h2>
        </div>
        <div className="select-genre">
          <select
            value={genreListId === "" ? "Pop" : genreListId}
            onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          >
            {genres.map((genre) => (
              <option key={genre.value} value={genre.value}>
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
