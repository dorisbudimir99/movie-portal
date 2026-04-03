import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";
import * as api from "../api/tmdb";

vi.mock("../api/tmdb");

describe("Home", () => {
  test("shows movies from the API", async () => {
    api.fetchGenres.mockResolvedValue({
      genres: [{ id: 28, name: "Action" }],
    });

    api.fetchTopRatedMovies.mockResolvedValue({
      results: [
        {
          id: 1,
          title: "Interstellar",
          release_date: "2014-11-07",
          vote_average: 8.6,
          genre_ids: [28],
        },
      ],
      total_pages: 1,
    });

    api.searchMovies.mockResolvedValue({
      results: [],
      total_pages: 1,
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(await screen.findByText("Interstellar")).toBeInTheDocument();
  });
});