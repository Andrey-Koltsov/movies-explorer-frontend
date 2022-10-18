import Container from "../Container/Container";
import Search from "../Search/Search";
import "./Films.css";

export default function Films() {
  return (
    <main className="films">
      <Container>
        <div className="films__search">
          <Search />
        </div>
      </Container>

    </main>
  );
};
