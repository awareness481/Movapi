import React, {useState, useEffect} from 'react';
import Title from './Title';
import search  from '../services/search';

const SearchResults = ({query}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const temp =  await search(query);
      setData(temp)
    }
    fetchData()
  }, [])

  return (
    <div className='search-results'>
      {
        data && data.length > 0 ?
           data.map((e) => {
             return <Title result={e} />
          })
          : ''
      }
    </div>
  );
}

export default SearchResults;