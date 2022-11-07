import { useCallback, useState } from "react";

export default function useMovieFilter(movies) {
  const [filteredMovies, setFilteredMovies] = useState([]);

  const filter = useCallback(({ searchValue, shortMovies }) => {
    const result = movies.filter(item => {
      const searchName = item.nameRU.toLowerCase().indexOf(searchValue.toLowerCase());
      if (shortMovies) {
        return Number(item.duration) < 40 && searchName !== -1;
      }
      return searchName !== -1;
    });
    setFilteredMovies(result);
  }, [movies]);

  return {
    filteredMovies,
    setFilteredMovies,
    filter
  }
};
