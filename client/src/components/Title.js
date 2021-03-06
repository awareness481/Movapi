import React from 'react';
import { useHistory } from "react-router-dom";


const Title = ({result}) => {
  let history = useHistory();

  const { 
    title,
    overview,
    poster_path,
    release_date,
    genre_ids,
    id,
    original_title,
    original_language,
    backdrop_path,
    popularity,
    vote_count,
    video,
    vote_average,

  } = result;

  return (
    <div 
      className='title' key={id}
      onClick={() => {
        history.push(`/title/${title}`,
         result
        );
      }}
    >
      <div className='title--hero'>
        <div className='title__poster'>
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className='title__poster--image'/>
        </div>
        <div className='title--header'>
          <h2 className='title--header__title'>{title}</h2>
          <span className='title--header__year'>{release_date}</span>
        </div>
        <div className='title__plot'>{overview}</div>
      </div>
    </div>
  )
}

export default Title;