import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
// 58b95ff0

{
  /* <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
alt="search"
onClick={() => searchMovies(searchTerm)}
/>  */
}
const api_url = "https://www.omdbapi.com/?apikey=58b95ff0";

const App = () => {
  const [movies, setmovies] = useState([]);
  const [search, setsearch] = useState("");

  const searchmovies = async (title) => {
    const res = await fetch(`${api_url}&s=${title}`);
    const data = await res.json();
    setmovies(data.Search);
  };

  useEffect(() => {
    searchmovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
        />
        {
          <img
            src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
            alt="search"
            onClick={() => {
              searchmovies(search);
            }}
          />
        }
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
