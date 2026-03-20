function SearchBar({ searchTerm, setSearchTerm, setPage }) {
  function handleChange(event) {
    setSearchTerm(event.target.value);
    setPage(1);
  }

  return (
    <input
      type="text"
      placeholder="Search for a movie"
      value={searchTerm}
      onChange={handleChange}
    />
  );
}

export default SearchBar;