import React, { useState } from 'react';

const SearchForm = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="control">
      <input 
        className="input"
        value={query}
        onChange={e => setQuery(e.target.value)}
        type="text"
        placeholder="Normal input"
        name='search'
      />
    </div>
  )
}

export default SearchForm;