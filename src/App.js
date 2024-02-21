import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WatchListPage from './WatchListPage';

function App() {
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://www.omdbapi.com/?s=movie&apikey=bf47be7');
      setMovies(response.data.Search);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const addToWatchList = (movie) => {
    const isMovieInWatchList = watchList.some((item) => item.imdbID === movie.imdbID);
    if (!isMovieInWatchList) {
      setWatchList([...watchList, movie]);
      console.log(`Added "${movie.Title}" to the watch list.`);
    } else {
      console.log(`"${movie.Title}" is already in the watch list.`);
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/"> <h1>Movies List</h1></Link>
          <Link to="/watchlist"><h1>My Watchlist</h1></Link>
        </header>
        <Routes>
          <Route path="/" element={<MoviesPage movies={movies} addToWatchList={addToWatchList} />} />
          <Route path="/watchlist" element={<WatchListPage watchList={watchList} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function MoviesPage({ movies, addToWatchList }) {
  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-card">
          <h3>{movie.Title}</h3>
          {movie.Poster && <img src={movie.Poster} alt={`${movie.Title} Poster`} className='movie-poster'/>}
          <p>Year: {movie.Year}</p>
          <button className='btnWatchlist' onClick={() => addToWatchList(movie) }>Add to Watchlist</button>
        </div>
      ))}
    </div>
  );
}

export default App;
