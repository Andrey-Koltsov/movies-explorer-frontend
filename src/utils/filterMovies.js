function filterMovies(value, short, movies) {
  const result = movies.filter(item => {
    const searchName = item.nameRU.toLowerCase().indexOf(value.toLowerCase());
    if (short) {
      return Number(item.duration) < 40 && searchName !== -1;
    }
    if (value === '') {
      return false
    }
    return searchName !== -1;
  });
  return result;
};

export default filterMovies;