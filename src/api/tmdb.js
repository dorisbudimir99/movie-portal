const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/json",
};

export async function fetchTopRatedMovies(page = 1) {
  const res = await fetch(`${BASE_URL}/movie/top_rated?page=${page}`, {
    headers,
  });
  if (!res.ok) throw new Error("Failed to fetch top rated movies");
  return res.json();
}

export async function searchMovies(query, page = 1) {
  const res = await fetch(
    `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&page=${page}`,
    { headers }
  );
  if (!res.ok) throw new Error("Failed to search movies");
  return res.json();

  
}

export async function fetchGenres() {
  const res = await fetch(`${BASE_URL}/genre/movie/list`, { headers });
  if (!res.ok) throw new Error("Failed to fetch genres");
  return res.json();
}

export async function fetchMovieDetails(movieId) {
  const res = await fetch(`${BASE_URL}/movie/${movieId}`, { headers });
  if (!res.ok) throw new Error("Failed to fetch movie details");
  return res.json();
}

export async function fetchMovieCredits(movieId) {
  const res = await fetch(`${BASE_URL}/movie/${movieId}/credits`, { headers });
  if (!res.ok) throw new Error("Failed to fetch movie credits");
  return res.json();

}

export function getImageUrl(path) {
  return `https://image.tmdb.org/t/p/w500${path}`;
}