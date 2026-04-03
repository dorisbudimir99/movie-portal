import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";

function MovieList({ movies, onMovieClick }) {
  if (movies.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={onMovieClick}
        />
      ))}
    </div>
  );
}

export default MovieList;