import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import SearchResults from './SearchResults';
import { useHistory } from "react-router-dom";
import Trending from './Trending';

import { Input } from 'antd';



const SearchForm = () => {
  const [query, setQuery] = useState('');
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`${query}`)
  }

  const { Search } = Input;

  return (
    <div>
    <div className="search">
      <form className='search__form' onSubmit={handleSubmit}>
        <Search
          className='search__form__input'
          placeholder="input search text"
          enterButton="Discover"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </form>
      
    </div>
    <Trending />
    </div>
  )
}

export default SearchForm;