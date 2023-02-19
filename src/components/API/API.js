import PropTypes from 'prop-types';

export const SearchMovie = (value, paramsId, setFoo) => {
  const API_KEY = '817d33fa7e0ddfc368fbd7439a742f76';
  const originURL = 'https://api.themoviedb.org/3/';

  fetch(
    `${originURL}movie/${paramsId}/${value}?api_key=${API_KEY}&language=en-US`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Enter another name'));
    })
    .then(results => setFoo(results))
    .catch(error => console.log(error));
};

SearchMovie.propTypes = {
  value: PropTypes.string.isRequired,
  paramsId: PropTypes.string.isRequired,
  setFoo: PropTypes.func.isRequired,
};
