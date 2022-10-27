import { useState } from "react";
import { Link } from "react-router-dom";
import Logotype from "../Logotype/Logotype";
import "./Register.css";

export default function Register() {
  const [inputsValue, setInputsValue] = useState({ name: '', email: '', password: '' });
  const [inputsValidity, setInputsValidity] = useState({ name: false, email: false, password: false });
  const [inputsErrorMessage, setInputsErrorMessage] = useState({ name: '', email: '', password: '' });

  function handleChange({ target: { name, value, validity, validationMessage } }) {
    setInputsValue(prevStat => ({ ...prevStat, [name]: value }));
    setInputsValidity(prevStat => ({ ...prevStat, [name]: validity.valid }));
    setInputsErrorMessage(prevStat => ({ ...prevStat, [name]: validationMessage }));
  }

  return (
    <div className="register">
      <Logotype />
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form">
        <fieldset className="register__fieldset">

          <label htmlFor="" className="register__label">Имя</label>
          <input
            required
            type="text"
            className={`register__input ${inputsValidity.name ? "" : "register__input_error"}`}
            name="name"
            onChange={handleChange}
            value={inputsValue.name}
            placeholder='Введите ваше имя'
          />
          <span className="register__error">{inputsErrorMessage.name}</span>

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
        <button className="register__submit" type>Зарегистрироваться</button>
      </form>
      <div className="register__inner">
        <span className="register__text">Уже зарегистрированы?</span>
        <Link to='/signin' className="register__link">Войти</Link>
      </div>
    </div>
  );
};