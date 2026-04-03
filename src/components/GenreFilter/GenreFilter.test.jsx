import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GenreFilter from "./GenreFilter";

describe("GenreFilter", () => {
  const genres = [
    { id: 28, name: "Action" },
    { id: 35, name: "Comedy" },
  ];

  test("renders genre options", () => {
    render(
      <GenreFilter
        genres={genres}
        selectedGenre=""
        setSelectedGenre={() => {}}
        setPage={() => {}}
      />
    );

    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("Comedy")).toBeInTheDocument();
  });

  test("calls setSelectedGenre and setPage when changed", async () => {
    const user = userEvent.setup();
    const setSelectedGenre = vi.fn();
    const setPage = vi.fn();

    render(
      <GenreFilter
        genres={genres}
        selectedGenre=""
        setSelectedGenre={setSelectedGenre}
        setPage={setPage}
      />
    );

    const select = screen.getByRole("combobox");
    await user.selectOptions(select, "28");

    expect(setSelectedGenre).toHaveBeenCalled();
    expect(setPage).toHaveBeenCalled();
  });
});