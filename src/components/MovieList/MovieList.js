import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MovieList = props => {
  const [searchMovie, setSearchMovie] = useState([]);

  const API_KEY = '817d33fa7e0ddfc368fbd7439a742f76';
  const originURL = 'https://api.themoviedb.org/3/';
  const query = 'query=';
  const name = props.searchName;

  const searchMovieByName = () => {
    fetch(
      `${originURL}search/movie?api_key=${API_KEY}&${query}${name}&language=en-US`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Enter another name'));
      })
      .then(({ results }) => setSearchMovie(results))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    if (props.searchName === '') {
      return;
    } else searchMovieByName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.searchName]);

  return (
    <div>
      <ul>
        {searchMovie.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: '/movies' }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

MovieList.propTypes = {
  props: PropTypes.string,
};
