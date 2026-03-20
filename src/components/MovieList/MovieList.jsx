import MovieCard from "../MovieCard/MovieCard";

function MovieList({ movies, onMovieClick }) {
  if (movies.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <div>
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