function GenreFilter({ genres, selectedGenre, setSelectedGenre, setPage }) {
  function handleChange(event) {
    setSelectedGenre(event.target.value);
    setPage(1);
  }

  return (
    <select value={selectedGenre} onChange={handleChange}>
      <option value="">All Genres</option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
}

export default GenreFilter;