import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <Link to='/'>
            <img src={logo} alt="Логотип" className="header__logo" />
          </Link>
          <Navigation />
        </div>
      </Container>
    </header>
  );
};
