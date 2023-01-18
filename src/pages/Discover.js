import React, { useState } from "react";
import { genres } from "../assets/constants";
import SongCard from "../components/SongCard";

const Discover = () => {
  const [genreSelect, setGenreSelect] = useState("Pop");
  console.log(genreSelect);
  return (
    <div className="discover-container">
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
      <div className="discover-songs">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, i) => (
          <SongCard key={song} song={song} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
