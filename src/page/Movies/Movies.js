import MovieList from 'components/MovieList/MovieList';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Form } from 'components/Form/Form';
import { searchingFilms } from 'servises/API';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const firstValue = searchParams.get('firstValue');

  useEffect(() => {
    if (!firstValue) return;
    const getSearchingMovies = async () => {
      try {
        setIsLoading(true);
        const searchMovies = await searchingFilms(firstValue);

        if (!searchMovies.length) {
          setError('There are no movies for your request');
          return;
        }
        setSearchMovies(searchMovies);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getSearchingMovies();
  }, [firstValue]);

  useEffect(() => {
    if (error) {
       alert(error);
    }
  }, [error]);
  

  return (
    <>
      <Form />
      {searchMovies.length >0 && !isLoading && <MovieList searchMovies={searchMovies} /> }
    </>
  );
};

export default Movies;

Movies.propTypes = {
  searchName: PropTypes.string,
};

