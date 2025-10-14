import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { API_URL } from './Context/MovieContext'; 

const SingleMovie = () => {
  const { id } = useParams();
  
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getSingleMovie = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      
      if (data.Response === "True") {
        setMovie(data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSingleMovie(`${API_URL}&i=${id}`);
    
    return () => setMovie(null); 
  }, [id]); 

  if (isLoading) {
    return <div className="loading-details">Loading movie details...</div>;
  }
  
  if (!movie) {
    return <div className="error-details">Movie details not found.</div>;
  }

  const { Poster, Title, Released, Genre, imdbRating, Country, Plot } = movie;

  return (
    <section className="single-movie-section">
      <div className="movie-card">
        <img 
          src={Poster === 'N/A' ? 'https://via.placeholder.com/300x450?text=No+Poster' : Poster} 
          alt={Title} 
        />
        <div className="movie-info">
          <h2>{Title}</h2>
          <p className="plot">**Plot:** {Plot}</p>
          <p>Genre: {Genre}</p>
          <p>Released: {Released}</p>
          <p>Country: {Country}</p>
          <p>IMDB Rating: **{imdbRating}** / 10</p>
          <NavLink to="/" className="back-btn">Go Back to Home</NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;