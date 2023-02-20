import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ searchMovies }) => {
  const location = useLocation();
  return (
      <ul>
        {searchMovies.map(({id, original_title}) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
  );
};

export default MovieList;


