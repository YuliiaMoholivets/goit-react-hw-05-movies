import MovieList from 'components/MovieList/MovieList';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Movies.module.css';

const Movies = () => {
  const [searchName, setSearchName] = useState('');

  const handleSubmitSearchMovie = evt => {
    evt.preventDefault();
    const firstValue = evt.currentTarget.elements.name.value;
    if (firstValue.trim() === '') {
      evt.currentTarget.reset();
      return;
    }
    setSearchName(firstValue.trim());
    evt.currentTarget.reset();
  };

  return (
    <>
      <div>
        <form className={styles.SearchForm} onSubmit={handleSubmitSearchMovie}>
          <input
            className={styles.input}
            name="name"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search film"
          />
          <button type="submit" className={styles.Button}>
            <span className={styles.label}>Search</span>
          </button>
        </form>
      </div>
      <MovieList searchName={searchName} />
    </>
  );
};

export default Movies;

Movies.propTypes = {
  searchName: PropTypes.string,
};
