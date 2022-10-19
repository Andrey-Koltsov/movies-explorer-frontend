import Container from "../Container/Container";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

export default function Movies() {
  return (
    <main className="movies">
      <Container>
        <div className="movies__search">
          <SearchForm />
        </div>
      </Container>

    </main>
  );
};
