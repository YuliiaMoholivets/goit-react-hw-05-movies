import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import styles from './MovieDetails.module.css';
import { DetailsFilm } from 'components/DetailFilm/DetailsFilm';
import { getFilmsById } from 'servises/API';

const MovieDetails = () => {
  const params = useParams();
  const paramsId = Number(params.moviesId);

  const location = useLocation();
  const [movieDetail, setMovieDetail] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    if (!paramsId) return;
    const getMovieDetail = async paramsId => {
      try {
        setIsLoading(true);
        const movieDetail = await getFilmsById(paramsId);
        setMovieDetail(movieDetail);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetail(paramsId);
  }, [paramsId]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);


  return (
    <section>
      <Link className={styles.btn} to={location.state?.from}>
        &#10229; Go back
      </Link>
      {movieDetail && !isLoading && <DetailsFilm movieDetail={ movieDetail} />      
      }
      <ul className={styles.link_list}>
        <li className={styles.item}>
          <Link to="cast" state={{ from: location.state?.from }}>
            Cast
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="reviews" state={{ from: location.state?.from }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />

    </section>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  state: PropTypes.object,
};
