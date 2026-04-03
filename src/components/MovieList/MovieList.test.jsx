import { render, screen } from "@testing-library/react";
import MovieList from "./MovieList";

describe("MovieList", () => {
  const movies = [
    {
      id: 1,
      title: "Movie One",
      release_date: "2020-01-01",
      vote_average: 7.5,
    },
    {
      id: 2,
      title: "Movie Two",
      release_date: "2021-01-01",
      vote_average: 8.0,
    },
  ];

  test("renders all movies", () => {
    render(<MovieList movies={movies} onMovieClick={() => {}} />);

    expect(screen.getByText("Movie One")).toBeInTheDocument();
    expect(screen.getByText("Movie Two")).toBeInTheDocument();
  });

  test("shows message when there are no movies", () => {
    render(<MovieList movies={[]} onMovieClick={() => {}} />);

    expect(screen.getByText("No movies found")).toBeInTheDocument();
  });
});