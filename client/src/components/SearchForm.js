import React, { useState } from 'react';
import SearchResults from './SearchResults';

import { Input } from 'antd';



const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [resultsVisibility, setResultsVisibility] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResultsVisibility(true);
  }

  const { Search } = Input;

  return (
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
      {resultsVisibility ? <SearchResults query={query}/> : ""}
    </div>
  )
}

export default SearchForm;