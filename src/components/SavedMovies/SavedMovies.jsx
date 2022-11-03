import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css"

export default function SavedMovies({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="saved-movies">
        <Container>
          <div className="saved-movies__search">
            <SearchForm />
          </div>
          <div className="saved-movies__list">
            <MoviesCardList />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};
