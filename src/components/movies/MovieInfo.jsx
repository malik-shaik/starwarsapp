import React from 'react';

const MovieInfo = ({ data, imageSrc }) => {
  return (
    <div className="moviedetails">
      <img height="160" width="130" src={imageSrc} alt="movie-poster" />

      <table className="table">
        <tbody>
          <tr>
            <td>Title</td>
            <td>:</td>
            <td id="movie-info">{data.title}</td>
          </tr>
          <tr>
            <td>Episode</td>
            <td>:</td>
            <td id="movie-info">{data.episode_id}</td>
          </tr>
          <tr>
            <td>Director</td>
            <td>:</td>
            <td id="movie-info">{data.director}</td>
          </tr>
          <tr>
            <td>Producer</td>
            <td>:</td>
            <td id="movie-info">{data.producer}</td>
          </tr>
          <tr>
            <td>Release Date</td>
            <td>:</td>
            <td id="movie-info">{data.release_date}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MovieInfo;
