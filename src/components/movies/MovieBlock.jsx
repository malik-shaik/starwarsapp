import React from 'react';
import images from '../../img/images';

const MovieBlock = ({ title, image }) => {
  return (
    <div className="movie-block">
      <img height="250" width="195" src={images[image]} alt="movie-poster" />
      <span className="movie-title">{title}</span>
    </div>
  );
};

export default MovieBlock;
