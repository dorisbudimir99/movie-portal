import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { fetchMovieDetails, fetchMovieCredits } from "../../api/tmdb";
import styles from "./MovieDetailsModal.module.css";

function MovieDetailsModal({ movieId, onClose }) {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getMovieInfo() {
      try {
        const movieData = await fetchMovieDetails(movieId);
        const castData = await fetchMovieCredits(movieId);

        setMovie(movieData);
        setCast(castData.cast.slice(0, 5));
      } catch (error) {
        console.log(error);
      }

    }

    getMovieInfo();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const year = movie.release_date ? movie.release_date.split("-")[0] : "N/A";

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.button}>Back</button>
        <h2>{movie.title}</h2>
        <p><strong>Year:</strong> {year}</p>
        <p><strong>Rating:</strong> {movie.vote_average}</p>
        <p><strong>Plot:</strong> {movie.overview}</p>

        <h3>Cast</h3>
        <ul>
          {cast.map((person) => (
            <li key={person.credit_id}>
              {person.name} as {person.character}
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.getElementById("modal-root")
  );

  
}

export default MovieDetailsModal;