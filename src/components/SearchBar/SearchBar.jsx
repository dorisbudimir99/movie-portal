function SearchBar({ searchTerm, setSearchTerm, setPage }) {
  function handleChange(event) {
    setSearchTerm(event.target.value);
    setPage(1);
  }

  return (
    <div>
      <label htmlFor="movie-search">Search Movies</label>
      <input
        id="movie-search"
        type="text"
        placeholder="Search for a movie"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;