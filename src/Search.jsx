import React from 'react';
import { useMovieContext } from './Context/MovieContext';

const Search = () => {
  const { searchTerm, setSearchTerm } = useMovieContext();

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Search title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
};

export default Search;
