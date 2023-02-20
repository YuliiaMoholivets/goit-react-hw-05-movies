import { MovieItem } from "components/MovieItem/MovieItem"

export const MovieTrendList = ({movieList}) => {
  return (
    <ul>
        {movieList.map(({id, original_title}) => (
          <MovieItem key={id} id={id} original_title={original_title} />
        ))}
      </ul>
  )
}
