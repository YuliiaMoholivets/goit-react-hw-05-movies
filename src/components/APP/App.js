import Layout from 'components/Layout/Layout';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../../page/Home'));
const Movies = lazy(() => import('../../page/Movies/Movies'));
const MovieDetails = lazy(() => import('../../page/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const NotFound = lazy(() => import('../../page/NotFound'));

function App() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:moviesId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;


