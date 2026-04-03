import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  test("updates input and calls setSearchTerm", async () => {
    const user = userEvent.setup();

    const setSearchTerm = vi.fn();
    const setPage = vi.fn();

    render(
      <SearchBar
        searchTerm=""
        setSearchTerm={setSearchTerm}
        setPage={setPage}
      />
    );

    const input = screen.getByPlaceholderText("Search for a movie");

    await user.type(input, "batman");

    expect(setSearchTerm).toHaveBeenCalled();
    expect(setPage).toHaveBeenCalled();
  });
});