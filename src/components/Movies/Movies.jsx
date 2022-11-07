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

export default function Movies({ loggedIn }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchString, setSearchString] = useState('');
  const [shortMovies, setShortMovies] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const moviesFilter = JSON.parse(localStorage.getItem('movies'));
    const shortMoviesFilter = JSON.parse(localStorage.getItem('shortMovies'));
    const searchStringFilter = JSON.parse(localStorage.getItem('searchString'));
    if (moviesFilter && searchStringFilter) {
      setMovies(moviesFilter);
      setShortMovies(shortMoviesFilter);
      setSearchString(searchStringFilter);
      setFilteredMovies(filterMovies(searchStringFilter, shortMoviesFilter, moviesFilter));
    }
  }, []);

  function handleSearch(searchValue) {
    if (!movies.length) {
      setIsLoading(true);
      moviesApi.getMovies()
        .then(data => {
          localStorage.setItem('movies', JSON.stringify(data));
          setMovies(data);
          setFilteredMovies(filterMovies(searchValue, shortMovies, data));
        })
        .catch(console.log)
        .finally(() => setIsLoading(false));
    } else {
      setFilteredMovies(filterMovies(searchValue, shortMovies, movies));
    }
    setSearchString(searchValue);
    localStorage.setItem('searchString', JSON.stringify(searchValue));
    localStorage.setItem('shortMovies', JSON.stringify(shortMovies));
  }

  function handleChangeCheckbox() {
    localStorage.setItem('shortMovies', JSON.stringify(!shortMovies));
    setFilteredMovies(filterMovies(searchString, !shortMovies, movies));
    setShortMovies(!shortMovies);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="movies">
        <Container>
          <div className="movies__search">
            <SearchForm
              searchString={searchString}
              checkbox={shortMovies}
              onSubmit={handleSearch}
              onChangeCheckbox={handleChangeCheckbox}
            />
          </div>
          <div className="movies__list">
            {isLoading
              ? <Preloader />
              : <MoviesCardList movies={filteredMovies} />
            }
          </div>
          <button className="movies__another" type="button">Еще</button>
        </Container>
      </main>
      <Footer />
    </>
  );
};
