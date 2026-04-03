import { memo } from "react";
import styles from "./MovieCard.module.css";

function MovieCard({ movie, onMovieClick }) {
  const year = movie.release_date ? movie.release_date.split("-")[0] : "N/A";

  return (
    <div
      className={styles.card}
      onClick={() => onMovieClick(movie.id)}
      role="button"
      tabIndex="0"
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          onMovieClick(movie.id);
        }
      }}
    >
      <h3>{movie.title}</h3>
      <p>Year: {year}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
}

export default memo(MovieCard);