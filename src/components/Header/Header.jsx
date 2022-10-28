import Container from "../Container/Container";
import Logotype from "../Logotype/Logotype";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <Logotype />
          <Navigation isAuth={true} />
        </div>
      </Container>
    </header>
  );
};
