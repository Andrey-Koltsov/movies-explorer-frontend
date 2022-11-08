import { useEffect, useState } from "react";
import filterMovies from "../../utils/filterMovies";
import "./Movies.css";

import Container from "../Container/Container";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import moviesApi from "../../utils/MoviesApi";
import useMoviesFilter from "../../hooks/useMoviesFilter";

export default function Movies({ loggedIn, onSaveMovie, onRemoveMovie, myMovies }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { filter, setIsShort, filteredList, isShort, searchString } = useMoviesFilter();

  useEffect(() => {
    const moviesFilter = JSON.parse(localStorage.getItem('movies'));
    const shortMoviesFilter = JSON.parse(localStorage.getItem('shortMovies'));
    const searchStringFilter = JSON.parse(localStorage.getItem('searchString'));
    if (moviesFilter) {
      setMovies(moviesFilter);
      filter(searchStringFilter, moviesFilter)
      setIsShort(shortMoviesFilter);
    }
  }, [filter, setIsShort]);

  function handleSearch(searchValue) {
    if (!movies.length) {
      setIsLoading(true);
      moviesApi.getMovies()
        .then(data => {
          setMovies(data);
          filter(searchValue, data);
          localStorage.setItem('movies', JSON.stringify(data));
        })
        .catch(console.log)
        .finally(() => setIsLoading(false));
    } else {
      filter(searchValue, movies);
    }
    localStorage.setItem('searchString', JSON.stringify(searchValue));
  }

  function handleChangeCheckbox() {
    localStorage.setItem('shortMovies', JSON.stringify(!isShort));
    setIsShort(!isShort);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="movies">
        <Container>
          <div className="movies__search">
            <SearchForm
              searchString={searchString}
              checkbox={isShort}
              onSubmit={handleSearch}
              onChangeCheckbox={handleChangeCheckbox}
            />
          </div>
          <div className="movies__list">
            {isLoading
              ? <Preloader />
              : <MoviesCardList
                movies={filteredList}
                onSaveMovie={onSaveMovie}
                onRemoveMovie={onRemoveMovie}
              />
            }
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};
