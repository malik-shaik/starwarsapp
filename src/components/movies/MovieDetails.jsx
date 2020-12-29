import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneMovieDetails } from '../../API/moviesAPI';
import images from '../../img/images';
import Charecters from '../charecters/Charecters';
import MovieInfo from './MovieInfo';
import BackArrow from '../common/BackArrow';
import LoadingSpinner from '../common/LoadingSpinner';

const MovieDetails = (props) => {
  const [movieData, setMovieData] = useState(undefined);
  const [charecters, setCharecters] = useState(undefined);
  const { id } = useParams();
  const { episode_id } = props.location.state;

  useEffect(() => {
    const loadMovieDetails = async () => {
      const { movieData, charecters } = await getOneMovieDetails(id);
      setMovieData(movieData);
      setCharecters(charecters);
    };
    loadMovieDetails();
  }, [id]);

  return (
    <>
      {!(movieData && charecters) ? (
        <LoadingSpinner />
      ) : (
        <>
          <BackArrow />
          <div className="moviedetails-container">
            <MovieInfo data={movieData} imageSrc={images[`image${episode_id}`]} />
            <Charecters data={charecters} />
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;
