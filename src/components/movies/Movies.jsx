import React, { useEffect, useState } from 'react';
import MovieBlock from './MovieBlock';
import { Link } from 'react-router-dom';
import { getAllMovies } from '../../API/moviesAPI';
import { ClipLoader } from 'react-spinners';

const Movies = () => {
  const [movies, setMovies] = useState(undefined);

  useEffect(() => {
    const loadAllMovies = async () => {
      const data = await getAllMovies();
      setMovies(data);
    };
    loadAllMovies();
  }, []);

  return (
    <div className="movies-container">
      {!movies ? (
        <div className="spinner">
          <ClipLoader size={100} color={'#14213d'} loading={true} />
        </div>
      ) : (
        movies.map((movie, index) => (
          <Link
            className="movie-link"
            key={movie.episode_id}
            to={{
              pathname: `/movie/${index + 1}`,
              state: { episode_id: movie.episode_id }
            }}
          >
            <MovieBlock title={movie.title} image={`image${movie.episode_id}`} />
          </Link>
        ))
      )}
    </div>
  );
};

export default Movies;
