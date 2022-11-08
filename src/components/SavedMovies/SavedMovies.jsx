import { useEffect } from "react";
import useMoviesFilter from "../../hooks/useMoviesFilter";

import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css"

export default function SavedMovies({ loggedIn, myMovies, isMoviesLoaded, onRemoveMovie }) {
  const {
    filter,
    setIsShort,
    filteredList,
    isShort,
    searchString
  } = useMoviesFilter();

  useEffect(() => {
    const shortMoviesFilter = JSON.parse(localStorage.getItem('myShortMovies'));
    const searchStringFilter = JSON.parse(localStorage.getItem('mySearchString'));
    if (searchStringFilter) {
      filter(searchStringFilter, myMovies);
      setIsShort(shortMoviesFilter);
    } else {
      filter('', myMovies);
      setIsShort(shortMoviesFilter);
    }
  }, [filter, setIsShort, myMovies]);

  function handleSearch(searchValue) {
    filter(searchValue, myMovies);
    localStorage.setItem('mySearchString', JSON.stringify(searchValue));
  }

  function handleChangeCheckbox() {
    localStorage.setItem('myShortMovies', JSON.stringify(!isShort));
    setIsShort(!isShort);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="saved-movies">
        <Container>
          <div className="saved-movies__search">
            <SearchForm
              searchString={searchString}
              checkbox={isShort}
              onSubmit={handleSearch}
              onChangeCheckbox={handleChangeCheckbox} />
          </div>
          <div className="saved-movies__list">
            <MoviesCardList
              movies={filteredList}
              isMoviesLoaded={isMoviesLoaded}
              onRemoveMovie={onRemoveMovie}
            />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};
