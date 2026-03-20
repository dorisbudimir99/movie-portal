import styles from "./MovieCard.module.css";
function MovieCard({ movie, onMovieClick }) {
  const year = movie.release_date ? movie.release_date.split("-")[0] : "N/A";

  return (
    <div onClick={() => onMovieClick(movie.id)}>
      <h3>{movie.title}</h3>
      <p>Year: {year}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
}

export default MovieCard;