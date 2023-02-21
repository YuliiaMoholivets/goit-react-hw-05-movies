import { useEffect, useState } from 'react';
import { trendingFilms } from 'servises/API';
import { MovieTrendList } from 'components/MovieTrendList/MovieTrendList';

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  
  useEffect(() => {
    const trendMovie = async () => {
      try {
        setIsLoading(true)
        const films = await trendingFilms();
        
        setMovieList(films);
        setError(null)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    };

    trendMovie();
  }, []);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <>
      <h2>Trending movies</h2>
      {movieList && !isLoading &&(<MovieTrendList movieList={ movieList} />)}
      
    </>
  );
};

export default Home;
