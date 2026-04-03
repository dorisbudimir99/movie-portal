import {
  fetchTopRatedMovies,
  searchMovies,
  fetchGenres,
  fetchMovieDetails,
  fetchMovieCredits,
} from "./tmdb";

describe("tmdb api", () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ results: [] }),
      })
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("fetchTopRatedMovies calls fetch", async () => {
    await fetchTopRatedMovies(2);
    expect(fetch).toHaveBeenCalled();
  });

  test("searchMovies calls fetch", async () => {
    await searchMovies("batman", 1);
    expect(fetch).toHaveBeenCalled();
  });

  test("fetchGenres calls fetch", async () => {
    await fetchGenres();
    expect(fetch).toHaveBeenCalled();
  });

  test("fetchMovieDetails calls fetch", async () => {
    await fetchMovieDetails(10);
    expect(fetch).toHaveBeenCalled();
  });

  test("fetchMovieCredits calls fetch", async () => {
    await fetchMovieCredits(10);
    expect(fetch).toHaveBeenCalled();
  });
});