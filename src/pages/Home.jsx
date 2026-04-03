import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {fetchTopRatedMovies, searchMovies, fetchGenres} from "../api/tmdb";
import MovieList from "../components/MovieList/MovieList";
import SearchBar from "../components/SearchBar/SearchBar";
import GenreFilter from "../components/GenreFilter/GenreFilter";
import Pagination from "../components/Pagination/Pagination";
import MovieDetailsModal from "../components/MovieDetailsModal/MovieDetailsModal";

function Home() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchGenres()
      .then((data) => setGenres(data.genres))
      .catch((err) => console.error(err));
  }, []);


  useEffect(() => {
    async function loadMovies() {
      try {
        setLoading(true);
        let data;

        if (searchTerm.trim()) {
          data = await searchMovies(searchTerm, page);
        } else {
          data = await fetchTopRatedMovies(page);
        }

        let filteredMovies = data.results;

        if (selectedGenre) {
          filteredMovies = filteredMovies.filter((movie) =>
            movie.genre_ids.includes(Number(selectedGenre))
          );
        }

        setMovies(filteredMovies);
        setTotalPages(data.total_pages > 500 ? 500 : data.total_pages);
      } catch (error) {
        console.error(error);
        
      } finally {
        setLoading(false);
      }

    }

    loadMovies();
  }, [searchTerm, selectedGenre, page]);

  const handleMovieClick = useCallback((movieId) => {
  navigate(`/movie/${movieId}`);
}, [navigate]);

const closeModal = useCallback(() => {
  navigate("/");
}, [navigate]);

  return (
    <div>
      <h1>Movie Portal</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setPage={setPage} />
      <GenreFilter
        genres={genres}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        setPage={setPage}
      />

      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <MovieList movies={movies} onMovieClick={handleMovieClick} />
      )}

      <Pagination page={page} totalPages={totalPages} setPage={setPage} />

      {id && <MovieDetailsModal movieId={id} onClose={closeModal} />}
    </div>
  );


}

export default Home;