import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import RelatedSong from "../components/RelatedSong";
import { useGetRelatedSongQuery, useGetSongDetailQuery } from "../redux/services/Shazam";

const SongDetail = () => {
  const { songId } = useParams();
  const { data, isFetching, error } = useGetSongDetailQuery({ songId });
  const { data : dataRelated, isFetching : isFetchingRelated } = useGetRelatedSongQuery({ songId });
  const divRef = useRef();

  console.log(dataRelated);

  useEffect(() => {
    if (divRef.current) divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  if (isFetching && isFetchingRelated) return <Loader title="Chargement de la musique" />;

  return (
    <div ref={divRef} className="song-container">
      <hr />
      <div className="header-detail">
        <div>
          <img src={data?.images?.coverart} alt="song" />
        </div>
        <div className="infodetail">
          <span className="title">{data.title}</span>
          <span>{data.subtitle}</span>
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
      <RelatedSong songs={dataRelated} />
    </div>
  );
};

export default SongDetail;
