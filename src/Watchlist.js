import React from 'react';
import './App.css';
const WatchList = ({ watchList }) => {
  return (
    <div className="watch-list">
     
          {watchList.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <h3>{movie.Title}</h3>
              {movie.Poster && <img src={movie.Poster} alt={`${movie.Title} Poster`} className='movie-poster'/>}
              <p>Year: {movie.Year}</p>
             
            </div>
          ))}

    </div>
  );
};

export default WatchList;
