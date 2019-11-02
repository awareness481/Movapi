import React, { useState } from 'react';
import SearchResults from './SearchResults';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [resultsVisibility, setResultsVisibility] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResultsVisibility(true);
  }

  return (
    <div className="control">
      <form onSubmit={handleSubmit}>
        <input 
          className="input"
          value={query}
          onChange={e => setQuery(e.target.value)}
          type="text"
          placeholder="Normal input"
          name='search'
        />
        <input type='submit' value='submit' />
      </form>
      {resultsVisibility ? <SearchResults query={query}/> : ""}
    </div>
  )
}

export default SearchForm;