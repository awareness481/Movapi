import React, { useState, useEffect } from 'react';
import cast from '../services/cast';

const Cast = ({id}) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const fetchData = async (id) => {
      const response = await cast();
      setCredits(response);
    }
    fetchData();
  }, [])

  const MapCredits = () => {
    return (
      credits.map(e => {
        return (
          <div className='actor' key={e.name}>
            <img src={`http://image.tmdb.org/t/p/w45${e.profile_path}`} />
            <span className='actor-name'>{e.name}</span>
            <span className='actor-character'>{e.character}</span>
          </div>
        );
      })
    ) 
  }

  return (
    <div className='credits'>
      <MapCredits />
    </div>
  )
}

export default Cast;