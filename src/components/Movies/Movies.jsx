import Container from "../Container/Container";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";

export default function Movies() {
  return (
    <main className="movies">
      <Container>
        <div className="movies__search">
          <SearchForm />
        </div>
        <div className="movies__list">
          <MoviesCardList />
        </div>
      </Container>

    </main>
  );
};
