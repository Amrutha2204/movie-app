import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMovieContext } from './Context/MovieContext';
import Search from './Search';

const Home = () => {
  const { movies, isLoading, isError } = useMovieContext();
  if (isLoading) {
    return <div className="loading">Loading movies...</div>;
  }
  if (isError || movies.length === 0) {
    return <div className="error-message">Sorry, no movies found. Please try a different search.</div>;
  }
  return (
    <section className="movie-page">
      <h1 style={{ textAlign: 'center', margin: '20px 0', color: '#b3d5dfff' }}>
        The Movie App
      </h1>
      <hr style={{ borderColor: '#30363d', marginBottom: '30px' }} />
      <Search />
      <div className="container movie-grid">
        {movies.map((currentMovie) => {
          const { imdbID, Title, Poster } = currentMovie;
          return (
            <NavLink to={`movie/${imdbID}`} key={imdbID} className="movie-link">
              <div className="card">
                <div className="card-info">
                  <h2>{Title.substring(0, 20)}{Title.length > 20 ? '...' : ''}</h2>
                  <img 
                    src={Poster === 'N/A' ? 'https://via.placeholder.com/300x450?text=No+Poster' : Poster} 
                    alt={Title} 
                  />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};
export default Home;