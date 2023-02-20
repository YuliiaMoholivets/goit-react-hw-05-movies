import { getCreditsById } from 'servises/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css';

const Cast = () => {
  const params = useParams();
  const paramsId = Number(params.moviesId);
  const [movieCreditDetail, setMovieCreditDetail] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


   useEffect(() => {
    if (!paramsId) return;
    const getMovieCredits = async paramsId => {
      try {
        setIsLoading(true);
        const credits = await getCreditsById(paramsId);
   
        setMovieCreditDetail(credits);
        setError('');
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieCredits(paramsId);
   }, [paramsId]);
  
  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <section>
      {movieCreditDetail.length >0 && !isLoading &&(
        <ul className={styles.list}>
          {movieCreditDetail.map(({id,
            name,
            profile_path}) => (
            <li className={styles.item} key={id}>
              <img
                  className={styles.image}
                  src={profile_path}
                  alt={name}
                />
              <p>{name}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Cast;
