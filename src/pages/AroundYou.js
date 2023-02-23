import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Error from "../components/Error";
import Loader from "../components/Loader";
import SongCard from "../components/SongCard";
import { useGetSongCountryQuery } from "../redux/services/Shazam";

const AroundYou = () => {
  const [country, setCountry] = useState("FR");
  const [loading, setLoading] = useState(true);
  const { data, isFetching, error } = useGetSongCountryQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  useEffect(() => {
    axios
      .get("http://ip-api.com/json/")
      .then((response) => {
        setCountry(response.data.countryCode);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  if (isFetching && loading) return <Loader title="Chargement des musiques" />;

  if (error && country) return <Error />;

  return (
    <div className="discover-container">
      <div className="discover-flex">
        <div className="discover-header">
          <h2>Around You {country}</h2>
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

export default AroundYou;
