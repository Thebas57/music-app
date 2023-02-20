import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Loader from "../components/Loader";
import RelatedSong from "../components/RelatedSong";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import {
  useGetArtistDetailQuery,
  useGetRelatedSongQuery,
  useGetSongDetailQuery,
} from "../redux/services/Shazam";

const ArtistDetail = () => {
  const dispatch = useDispatch();
  const { artistId } = useParams();
  const { data, isFetching, error } = useGetArtistDetailQuery({ artistId });
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  const divRef = useRef();

  console.log(data)

  useEffect(() => {
    if (divRef.current) divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  if (isFetching) return <Loader title="Chargement de l'artiste" />;

  if (error) return <Error />;

  return (
    <div ref={divRef} className="song-container">
      <hr />
      <div className="header-detail">
        <div>
          <img src={data.data[0].avatar} alt="song" />
        </div>
        <div className="infodetail">
          <span className="title">{data.data[0].attributes.name}</span>
          <span>{data.data[0].attributes.genreNames}</span>
        </div>
      </div>
      <RelatedSong
        data={data.data[0].views["top-songs"].data}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetail;
