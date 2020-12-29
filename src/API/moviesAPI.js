import axios from 'axios';

const url = 'https://swapi.dev/api/films';

export const getAllMovies = async () => {
  try {
    const res = await axios.get(url);
    // console.log(res.data.results);
    return res.data.results;
  } catch (error) {
    console.log('Error in api call: ', error.message);
  }
};

export const getOneMovieDetails = async (id) => {
  try {
    const movie = await axios.get(`${url}/${id}`);

    const promises = movie.data.characters.map((url) => axios.get(url));

    const charectersData = await Promise.all(promises);

    const charecters = charectersData.map((result) => result.data);

    return { movieData: movie.data, charecters };
  } catch (error) {
    console.log('Error in api call: ', error.message);
  }
};
