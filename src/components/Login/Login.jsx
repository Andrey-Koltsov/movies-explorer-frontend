import { useState } from "react";
import { Link } from "react-router-dom";
import Logotype from "../Logotype/Logotype";
import "./Login.css";

export default function Login() {
  const [inputsValue, setInputsValue] = useState({ email: '', password: '' });
  const [inputsValidity, setInputsValidity] = useState({ email: false, password: false });
  const [inputsErrorMessage, setInputsErrorMessage] = useState({ email: '', password: '' });

  function handleChange({ target: { name, value, validity, validationMessage } }) {
    setInputsValue(prevStat => ({ ...prevStat, [name]: value }));
    setInputsValidity(prevStat => ({ ...prevStat, [name]: validity.valid }));
    setInputsErrorMessage(prevStat => ({ ...prevStat, [name]: validationMessage }));
  }

  return (
    <div className="login">
      <Logotype />
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form">
        <fieldset className="login__fieldset">
          <label htmlFor="" className="register__label">E-mail</label>
          <input
            required
            type="email"
            className={`register__input ${inputsValidity.email ? "" : "register__input_error"}`}
            name="email"
            onChange={handleChange}
            value={inputsValue.email}
            placeholder='Введите ваш email'
          />
          <span className="register__error">{inputsErrorMessage.email}</span>

          <label htmlFor="" className="register__label">Пароль</label>
          <input
            required
            type="password"
            className={`register__input ${inputsValidity.password ? "" : "register__input_error"}`}
            name="password"
            onChange={handleChange}
            value={inputsValue.password}
            placeholder='Введите ваш пароль'
          />
          <span className="register__error">{inputsErrorMessage.password}</span>
        </fieldset>
        <button className="login__submit" type>Войти</button>
      </form>
      <div className="login__inner">
        <span className="login__text">Ещё не зарегистрированы?</span>
        <Link to='/signup' className="login__link">Регистрация</Link>
      </div>
    </div>
  );
};
