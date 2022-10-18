import logo from "../../images/logo.svg";
import Container from "../Container/Container";
import "./Header.css";

export default function Header(params) {
  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <img src={logo} alt="Логотип" className="header__logo" />
          <nav className="header__menu">
            <div className="header__link">Регистрация</div>
            <div className="header__link">Войти</div>
          </nav>
        </div>
      </Container>
    </header>
  );
};
