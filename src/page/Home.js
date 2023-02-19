import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const API_KEY = '817d33fa7e0ddfc368fbd7439a742f76';
  const originURL = 'https://api.themoviedb.org/3/';

  const trendMovie = () => {
    fetch(`${originURL}trending/movie/week?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Enter another name'));
      })
      .then(({ results }) => setMovieList(results))
      .catch(error => console.log(error));
  };

  const nameMovie = movie => {
    if (movie.title) {
      return movie.title;
    } else return movie.name;
  };

  useEffect(() => {
    trendMovie();
  }, []);

  return (
    <>
      <h2>Trending movies</h2>
      <ul>
        {movieList.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: '/home' }}>
              {nameMovie(movie)}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
