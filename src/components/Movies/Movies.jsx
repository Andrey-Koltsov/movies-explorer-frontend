import Container from "../Container/Container";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Movies({ loggedIn, movies }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="movies">
        <Container>
          <div className="movies__search">
            <SearchForm />
          </div>
          <div className="movies__list">
            <MoviesCardList movies={movies} />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};
