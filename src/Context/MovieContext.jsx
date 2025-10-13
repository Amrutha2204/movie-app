import React, { useContext, useState, useEffect } from 'react';
export const API_URL = `https://www.omdbapi.com/?apikey=c809c7e`; 

const MovieContext = React.createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('batman');

  const fetchMovies = async (url) => {
    setIsLoading(true);
    setIsError(false);
    
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === 'True') {
        setMovies(data.Search || []); 
        setIsLoading(false);
      } else {
        setIsError(true);
        setMovies([]);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setIsError(true);
      setMovies([]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMovies(`${API_URL}&s=${searchTerm}`);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const contextValue = {
    movies,
    isLoading,
    isError,
    searchTerm,
    setSearchTerm,
  };

  return (
    <MovieContext.Provider value={contextValue}>
      {children}
    </MovieContext.Provider>
  );
};
const useMovieContext = () => {
  return useContext(MovieContext);
};

export { MovieProvider, useMovieContext };