import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Register.css";

export default function Register() {
  return (
    <div className="login">
      <Link to='/'>
        <img src={logo} alt="Логотип" className="login__logo" />
      </Link>
      <h1 className="login__title">Добро пожаловать!</h1>
      <form className="login__form">
        <label htmlFor="" className="login__label">Имя</label>
        <input type="text" className="login__input" />
        <label htmlFor="" className="login__label">E-mail</label>
        <input type="text" className="login__input" />
        <label htmlFor="" className="login__label">Пароль</label>
        <input type="password" className="login__input" />
        <button className="login__submit" type>Зарегистрироваться</button>
      </form>
      <div className="login__inner">
        <span className="login__text">Уже зарегистрированы?</span>
        <Link to='/signin' className="login__link">Войти</Link>
      </div>
    </div>
  );
};