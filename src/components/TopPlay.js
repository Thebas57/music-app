import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetTopChartsQuery } from "../redux/services/Shazam";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import TopTitreCard from "./TopTitreCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  const topPlays = data?.slice(0, 5);

  useEffect(() => {
    //Permet de remonter à la div au chargement du composant
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div ref={divRef} className="topplay-container">
      <div className="header-tp">
        <h1 className="title-tp">Top Titres</h1>
        <h5>See more</h5>
      </div>
      <div className="content-tp">
        {topPlays?.map((titre, i) => (
          <TopTitreCard
            key={titre.title}
            song={titre}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
      <div className="header-tp">
        <h1 className="title-tp">Top Artists</h1>
        <h5>See more</h5>
      </div>
      <div className="content-tp-artists">
        <Swiper
          spaceBetween={15}
          slidesPerView="auto"
          freeMode
          centeredSlides
          centeredSlidesBounds
        >
          {topPlays?.map((titre, i) => (
            <SwiperSlide
              key={titre?.key}
              style={{ width: "25%", height: "auto" }}
              className="swiperSlide"
            >
              {titre.images ? (
                <img
                  src={titre?.images.background}
                  alt="img"
                  className="artist-img"
                />
              ) : (
                <span>zefze</span>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
