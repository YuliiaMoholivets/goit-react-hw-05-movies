import { SearchMovie } from 'components/API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Image from '../Image/img.png';
import styles from './Cast.module.css';

const Cast = () => {
  const params = useParams();
  const paramsId = Number(params.moviesId);
  const [movieCreditDetail, setMovieCreditDetail] = useState();
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    SearchMovie('credits', paramsId, setMovieCreditDetail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      {movieCreditDetail && (
        <ul className={styles.list}>
          {movieCreditDetail.cast.map(hero => (
            <li className={styles.item} key={hero.id}>
              {hero.profile_path ? (
                <img
                  className={styles.image}
                  src={`${baseImgUrl}${hero.profile_path}`}
                  alt={hero.original_name}
                />
              ) : (
                <img className={styles.image} src={Image} alt="No foto" />
              )}

              <p>{hero.original_name}</p>
              <p>Character: {hero.character}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Cast;
