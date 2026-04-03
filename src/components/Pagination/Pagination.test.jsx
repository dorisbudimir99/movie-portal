import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination from "./Pagination";

describe("Pagination", () => {
  test("shows current page and total pages", () => {
    render(<Pagination page={2} totalPages={10} setPage={() => {}} />);

    expect(screen.getByText("Page 2 of 10")).toBeInTheDocument();
  });

  test("calls setPage when next is clicked", async () => {
    const user = userEvent.setup();
    const setPage = vi.fn();

    render(<Pagination page={1} totalPages={10} setPage={setPage} />);

    await user.click(screen.getByText("Next"));

    expect(setPage).toHaveBeenCalledWith(2);
  });

  test("previous button is disabled on first page", () => {
    render(<Pagination page={1} totalPages={10} setPage={() => {}} />);

    expect(screen.getByText("Previous")).toBeDisabled();
  });
});