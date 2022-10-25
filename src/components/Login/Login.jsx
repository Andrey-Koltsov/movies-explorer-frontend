import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <img src={logo} alt="Логотип" className="login__logo" />
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form">
        <label htmlFor="" className="login__label">E-mail</label>
        <input type="text" className="login__input" />
        <label htmlFor="" className="login__label">Пароль</label>
        <input type="password" className="login__input" />
        <button className="login__submit" type>Войти</button>
      </form>
      <div className="login__inner">
        <span className="login__text">Ещё не зарегистрированы?</span>
        <Link to='/signup' className="login__link">Регистрация</Link>
      </div>
    </div>
  );
};
