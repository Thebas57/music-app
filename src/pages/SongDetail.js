import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Loader from "../components/Loader";
import RelatedSong from "../components/RelatedSong";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import {
  useGetRelatedSongQuery,
  useGetSongDetailQuery,
} from "../redux/services/Shazam";

const SongDetail = () => {
  const dispatch = useDispatch();
  const { songId } = useParams();
  const { data, isFetching, error } = useGetSongDetailQuery({ songId });
  const { data: dataRelated, isFetching: isFetchingRelated } =
    useGetRelatedSongQuery({ songId });
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  const divRef = useRef();

  const handlePause = () => {
    dispatch(playPause(false));
  };

  const handlePlay = (song, i) => {
    console.log("play", song, activeSong, i, isPlaying);
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  console.log(data);

  useEffect(() => {
    if (divRef.current) divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  if (isFetching && isFetchingRelated)
    return <Loader title="Chargement de la musique" />;

  if (error) return <Error />;

  return (
    <div ref={divRef} className="song-container">
      <hr />
      <div className="header-detail">
        <div>
          <img src={data?.images?.coverart} alt="song" />
        </div>
        <div className="infodetail">
          <span className="title">{data?.title}</span>
          <span>{data?.subtitle}</span>
          <span>{data?.genres?.primary}</span>
        </div>
      </div>
      <div className="lyrics">
        <span className="sub-title">Paroles :</span>
        {data?.sections[1].type === "LYRICS" ? (
          data?.sections[1].text.map((parole, i) => <p key={i}>{parole}</p>)
        ) : (
          <p>Aucune parole pour cette musique</p>
        )}
      </div>
      <RelatedSong data={dataRelated} isPlaying={isPlaying} activeSong={activeSong} handlePause={handlePause} handlePlay={handlePlay} />
    </div>
  );
};

export default SongDetail;
