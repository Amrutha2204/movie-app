import React from 'react';
import { useMovieContext } from './Context/MovieContext';

const Search = () => {
  const { inputTerm, setInputTerm, setSearchQuery } = useMovieContext();

  const handleSearch = (e) => {
      e.preventDefault();
      
      setSearchQuery(inputTerm);
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <form onSubmit={handleSearch} style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <input
          type="text"
          placeholder="Search movie title"
          
          value={inputTerm}
          onChange={(e) => setInputTerm(e.target.value)}
          style={{ width: '100%', maxWidth: '400px', padding: '10px 15px', border: '1px solid #30363d', borderRadius: '20px', backgroundColor: '#21262d', color: '#c9d1d9', fontSize: '1em' }}
        />
        <button 
            type="submit" 
            style={{ 
                padding: '10px 20px', 
                backgroundColor: '#61dafb', 
                color: '#0d1117', 
                border: 'none', 
                borderRadius: '20px', 
                fontWeight: 'bold', 
                cursor: 'pointer' 
            }}
        >
            Search
        </button>
      </form>
    </div>
  );
};

export default Search;