import { SearchMovie } from 'components/API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const params = useParams();
  const paramsId = Number(params.moviesId);
  const [movieReviews, setMovieReviews] = useState();

  useEffect(() => {
    SearchMovie('reviews', paramsId, setMovieReviews);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      {movieReviews && (
        <ul>
          {movieReviews.results.length > 0 ? (
            movieReviews.results.map(result => (
              <li key={result.id}>
                <p>{result.author}</p>
                <p>{result.content}</p>
              </li>
            ))
          ) : (
            <li> We don't have any reviews for this movie</li>
          )}
        </ul>
      )}
    </section>
  );
};

export default Reviews;
