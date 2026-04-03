import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MovieCard from "./MovieCard";

describe("MovieCard", () => {
  const movie = {
    id: 1,
    title: "The Dark Knight",
    release_date: "2008-07-18",
    vote_average: 8.5,
  };

  test("renders movie title, year and rating", () => {
    render(<MovieCard movie={movie} onMovieClick={() => {}} />);

    expect(screen.getByText("The Dark Knight")).toBeInTheDocument();
    expect(screen.getByText("Year: 2008")).toBeInTheDocument();
    expect(screen.getByText("Rating: 8.5")).toBeInTheDocument();
  });

  test("calls onMovieClick when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<MovieCard movie={movie} onMovieClick={handleClick} />);

    await user.click(screen.getByText("The Dark Knight"));

    expect(handleClick).toHaveBeenCalledWith(1);
  });
});