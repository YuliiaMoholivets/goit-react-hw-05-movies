import PropTypes from 'prop-types';
import Image from '../../components/Image/img.png';
import { useEffect, useState, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import BackBtn from 'components/BtnBack/BackBtn';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const params = useParams();
  const paramsId = Number(params.moviesId);
  const [movieDetail, setMovieDetail] = useState();
  const location = useLocation();
  const API_KEY = '817d33fa7e0ddfc368fbd7439a742f76';
  const originURL = 'https://api.themoviedb.org/3/';
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';

  const searchMovieById = () => {
    fetch(`${originURL}movie/${paramsId}?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Enter another name'));
      })
      .then(results => setMovieDetail(results))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    searchMovieById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <BackBtn />
      {movieDetail && (
        <div className={styles.section}>
          {movieDetail.poster_path ? (
            <img
              className={styles.image}
              src={`${baseImgUrl}${movieDetail.poster_path}`}
              alt={movieDetail.title}
            />
          ) : (
            <img className={styles.image} src={Image} alt="No foto" />
          )}
          <div>
            <p className={styles.main_title} key={nanoid()}>
              {movieDetail.title}
              {movieDetail.release_date ? (
                <span>({movieDetail.release_date.slice(0, 4)})</span>
              ) : (
                <span>(----)</span>
              )}
            </p>
            <p className={styles.main_title} key={nanoid()}>
              User score:
              <span className={styles.line}>
                {Number.parseInt(movieDetail.vote_average * 10)} &#37;
              </span>
            </p>
            <p className={styles.main_title} key={nanoid()}>
              Overview: <br />
              <span className={styles.line}>{movieDetail.overview}</span>
            </p>
            <p className={styles.main_title} key={nanoid()}>
              Genres: <br />
              {movieDetail.genres.map(genre => (
                <span className={styles.line}>{genre.name}</span>
              ))}
            </p>
          </div>
        </div>
      )}
      <ul className={styles.link_list}>
        <li className={styles.item} key={nanoid()}>
          <Link to="cast" state={{ from: location.state.from }}>
            Cast
          </Link>
        </li>
        <li className={styles.item} key={nanoid()}>
          <Link to="reviews" state={{ from: location.state.from }}>
            Reviews
          </Link>
        </li>
      </ul>

      <Suspense fallback={<p>Loading.....</p>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  state: PropTypes.object,
};
