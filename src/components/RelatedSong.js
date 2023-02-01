import React from 'react'
import TopTitreCard from './TopTitreCard';

const RelatedSong = ({songs}) => {
    console.log(songs);
  return (
    <div className='related-container'>
        <span className="title">Titres similaires</span>
        {songs?.map((song, i) => <TopTitreCard key={i} song={song} i={i} isRelated={true} />)}
    </div>
  )
}

export default RelatedSong