import { Link, useLocation } from 'react-router-dom';

export const MovieItem = ({ id, original_title }) => {
  const location = useLocation();
  return (
    <li>
        <Link to={`movies/${id}`} state={{ from: location }}>
            {original_title}
        </Link>
    </li>
  )
}
