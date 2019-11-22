import React, {useState, useEffect} from 'react';
import Title from './Title';
// import SearchPagination from './SearchPagination';
import { List } from 'antd'
import search  from '../services/search';

const SearchResults = ({query}) => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const temp =  await search(query);
      setData(temp.results)
      setLimit(temp.total_results)
    }
    fetchData()
  }, [])

  return (
    <div className='search-results'>
      {data ? <List
      pagination={true}
      dataSource={data}
      renderItem={item => <List.Item><Title result={item} /></List.Item>}
      /> : ''}
    </div>
  );
}

export default SearchResults;