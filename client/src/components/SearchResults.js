import React, {useState, useEffect} from 'react';
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
    <div>
      {
        data && data.length > 0 ?
           data.map((e) => {
             return e.Title
          })
          : ''
      }
    </div>
  );
}

export default SearchResults;