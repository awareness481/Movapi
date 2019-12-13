import React, { useState, useEffect } from 'react';
import trending from '../services/trending';

const Movie = ({e}) => {
  const [display, setDisplay] = useState(false);

  return (
    <div 
      className='trending-movie'
      title={display ? e.title : ''}
  
    >
      <img className='trending-movie-poster' src={`https://image.tmdb.org/t/p/w154${e.poster_path}`} />
    </div>
  ) 
}

const Trending = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await trending();
      console.log(response)
      setData(response);
    }

    fetchData();
  }, [])


  

  return(
    <div className='trending'>
      {
        data ? data.slice(0, 10).map(e => {
          return (
            <Movie e={e} key={e.id} />
          ); 
        }) : ''
      }

      
    </div>
  )
}

export default Trending;