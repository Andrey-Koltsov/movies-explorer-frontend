import { useEffect, useState } from "react";
import useMovieFilter from "../../hooks/useMovieFilter";
import "./Movies.css";

import Container from "../Container/Container";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

export default function Movies({ loggedIn, movies, isMoviesLoaded }) {
  const [searchValue, setSearchValue] = useState('');
  const [shortMovies, setShortMovies] = useState(false);
  const { filteredMovies, filter, setFilteredMovies } = useMovieFilter(movies);

  useEffect(() => {
    console.log('mounted movies');
    const moviesFilter = JSON.parse(localStorage.getItem('moviesFilter'));
    if (moviesFilter) {
      setSearchValue(moviesFilter.searchValue);
      setShortMovies(moviesFilter.shortMovies);
      setFilteredMovies(moviesFilter.movies);
    }
  }, [setFilteredMovies]);

  useEffect(() => {
    localStorage.setItem('moviesFilter', JSON.stringify({ searchValue, shortMovies, movies: filteredMovies }));
  }, [filteredMovies, searchValue, shortMovies]);

  function handleSearch({ searchValue, shortMovies }) {
    filter({ searchValue, shortMovies });
    setSearchValue(searchValue);
    setShortMovies(shortMovies);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="movies">
        <Container>
          <div className="movies__search">
            <SearchForm
              searchValue={searchValue}
              checkbox={shortMovies}
              onSubmit={handleSearch}
            />
          </div>
          <div className="movies__list">
            {isMoviesLoaded
              ? <MoviesCardList list={filteredMovies} />
              : <Preloader />
            }
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};
