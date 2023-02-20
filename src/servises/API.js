import axios from 'axios';
import Img from '../components/Image/img.png';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '817d33fa7e0ddfc368fbd7439a742f76';

const params = {
  api_key: API_KEY,
  language: 'en-US',
  include_adult: false,
};

export async function trendingFilms() {
  const { data } = await axios.get('/trending/movie/day', { params });
  const movies = data.results.map(({ id, original_title }) => ({
    id,
    original_title,
  }));
  return movies;
}

export async function searchingFilms(query) {
  const params = {
    query,
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
  };
  const { data } = await axios.get('/search/movie', { params });
  const movies = data.results.map(({ id, original_title }) => ({
    id,
    original_title,
  }));
  return movies;
}

export async function getFilmsById(id) {
  const { data } = await axios.get(`/movie/${id}`, { params });
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = data;
  return {
    poster_path: poster_path
      ? 'https://image.tmdb.org/t/p/w500' + poster_path
      : Img,
    original_title,
    release_date: release_date.slice(0, 4),
    vote_average: vote_average.toFixed(2),
    overview,
    genres: genres.map(({ name }) => name).join(', '),
  };
}

export async function getCreditsById(id) {
  const { data } = await axios.get(`/movie/${id}/credits`, { params });
  const credits = data.cast.map(({ id, name, profile_path }) => ({
    id,
    name,
    profile_path: profile_path
      ? 'https://image.tmdb.org/t/p/w500' + profile_path
      : Img,
  }));
  return credits;
}

export async function getReviewsById(id) {
  const { data } = await axios.get(`/movie/${id}/reviews`, { params });
  const reviews = data.results.map(({ id, author, content }) => ({
    id,
    author,
    content,
  }));
  return reviews;
}
