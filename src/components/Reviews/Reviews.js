import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'servises/API';

const Reviews = () => {
  const params = useParams();
  const paramsId = Number(params.moviesId);
  const [movieReviews, setMovieReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);




  useEffect(() => {
    if (!paramsId) return;
    const getMovieReviews = async paramsId => {
      try {
        setIsLoading(true);
        const reviews = await getReviewsById(paramsId);

        setMovieReviews(reviews);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieReviews(paramsId);
  }, [paramsId]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <section>
      {movieReviews.length >0  && !isLoading&& (
        <ul>
            {movieReviews.map(({ id,
              author,
              content, }) => (
              <li key={id}>
                <p>{author}</p>
                <p>{content}</p>
              </li>
            ))} 
          </ul>
      )}
      {movieReviews.length===0 && !isLoading && (<p> We don't have any reviews for this movie</p>)}           
    </section>
  );
};

export default Reviews;
