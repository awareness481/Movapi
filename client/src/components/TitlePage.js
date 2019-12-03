import React from 'react';
import { withRouter } from "react-router";


const TitlePage = ({location}) => {

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

  } = location.state;

  return (
    <div className='title-page'>
      <div className='title-page__header'>
        <div className='title-page__header__poster'>
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} 
            className='title-page__header__poster__image'
          />
        </div>
        <div className='title-page__header__main'>
          <h1 className='title-page__header__main__title'>{title}</h1>
          <p className='title-page__header__main__plot'>
            {overview}
          </p>
          <div className='title-page__header__main__details'>
            <span className='release-date'>{release_date}</span>
            <span className='votes'>{vote_average} {vote_count}</span>
            <span className='genre'>Drama Thriller</span>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default withRouter(TitlePage);

