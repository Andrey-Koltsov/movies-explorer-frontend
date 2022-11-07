import { useCallback, useState } from "react";

export default function useMovieFilter(movies) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredShortMovies, setFilteredShortMovies] = useState([]);

  const filter = useCallback(({ searchValue }) => {
    const resultMovies = movies.filter(item => {
      return item.nameRU.toLowerCase().indexOf(searchValue.toLowerCase());
    });
    const resulShorttMovies = resultMovies.filter(item => Number(item.duration) < 40);
    setFilteredMovies(resultMovies);
    setFilteredShortMovies(resulShorttMovies);
  }, [movies]);

  return {
    filteredMovies,
    filteredShortMovies,
    filter
  }
};
