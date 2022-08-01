import React, {useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    const [movies, setMovies] = useState([]);
    const [isloading,setLoading] = useState(false);
  const fetchMoviesHandler = useCallback(async () => {
      setLoading(true);
   const response = await fetch('https://swapi.py4e.com/api/films');
   const data = await response.json();

   const transformedData = data.results.map((item) => {
       return {title: item.title,
           id: item.episode_id,
           openingText: item.opening_crawl,
           releaseDate: item.release_date
       }
   });
   setMovies(transformedData);
   setLoading(false);}, []);

 useEffect(() => {fetchMoviesHandler();}, [fetchMoviesHandler])

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
