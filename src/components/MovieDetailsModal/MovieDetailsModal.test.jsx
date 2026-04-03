import { render, screen } from "@testing-library/react";
import MovieDetailsModal from "./MovieDetailsModal";
import * as api from "../../api/tmdb";

vi.mock("../../api/tmdb");

describe("MovieDetailsModal", () => {
  beforeEach(() => {
    const modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(modalRoot);
  });

  afterEach(() => {
    document.body.innerHTML = "";
    vi.clearAllMocks();
  });

  test("shows movie details and cast", async () => {
    api.fetchMovieDetails.mockResolvedValue({
      title: "Inception",
      release_date: "2010-07-16",
      vote_average: 8.3,
      overview: "A mind-bending movie",
    });

    api.fetchMovieCredits.mockResolvedValue({
      cast: [
        { credit_id: "1", name: "Leonardo DiCaprio", character: "Cobb" },
      ],
    });

    render(<MovieDetailsModal movieId="1" onClose={() => {}} />);

    expect(await screen.findByText("Inception")).toBeInTheDocument();
    expect(screen.getByText(/Year:/)).toBeInTheDocument();
    expect(screen.getByText(/Rating:/)).toBeInTheDocument();
    expect(screen.getByText(/Plot:/)).toBeInTheDocument();
    expect(screen.getByText("Leonardo DiCaprio as Cobb")).toBeInTheDocument();
  });
});