import styles from '../../page/MovieDetails/MovieDetails.module.css'

export const DetailsFilm = ({ movieDetail }) => {
    const { poster_path,
        original_title,
        release_date,
        vote_average,
        overview,
        genres, } = movieDetail;
  return (
    <div className={styles.section}>
            <img
              className={styles.image}
              src={poster_path}
              alt={original_title}
            />
          <div>
            <p className={styles.main_title}>
                  {original_title}
                  <span>({release_date})</span>            
            </p>
            <p className={styles.main_title}>
              User score: {vote_average}
            </p>
            <p className={styles.main_title}>
              Overview: <br />
              <span className={styles.line}>{overview}</span>
            </p>
            <p className={styles.main_title}>
              Genres: <br />
              {genres}
            </p>
          </div>
        </div>
  )
}
