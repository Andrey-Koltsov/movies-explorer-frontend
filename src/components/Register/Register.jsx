import { Link } from "react-router-dom";
import { useFormValidation } from "../../hooks/useFormValidation";
import Logotype from "../Logotype/Logotype";
import "./Register.css";

export default function Register({ onRegister }) {
  const {
    values,
    handleChange,
    isValid,
    errors,
    inputsValid
  } = useFormValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isValid) {
      const { name, email, password } = values;
      onRegister({ name, email, password });
    }
  }

  return (
    <div className="register">
      <Logotype />
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form" onSubmit={handleSubmit} noValidate>
        <fieldset className="register__fieldset">
          <label htmlFor="" className="register__label">Имя</label>
          <input
            required
            type="text"
            className={`register__input ${inputsValid.name ? "" : "register__input_error"}`}
            name="name"
            onChange={handleChange}
            value={values.name ? values.name : ""}
            placeholder="Введите ваше имя"
          />
          <span className="register__error">{errors.name}</span>

          <label htmlFor="" className="register__label">E-mail</label>
          <input
            required
            type="email"
            className={`register__input ${inputsValid.email ? "" : "register__input_error"}`}
            name="email"
            onChange={handleChange}
            value={values.email ? values.email : ""}
            placeholder="Введите ваш email"
          />
          <span className="register__error">{errors.email}</span>

          <label htmlFor="" className="register__label">Пароль</label>
          <input
            required
            type="password"
            className={`register__input ${inputsValid.password ? "" : "register__input_error"}`}
            name="password"
            onChange={handleChange}
            value={values.password ? values.password : ""}
            placeholder="Введите ваш пароль"
            autoComplete="on"
          />
          <span className="register__error">{errors.password}</span>
        </fieldset>
        <button
          className={`register__submit ${isValid ? "" : "register__submit_disable"} `}
          type="submit"
          disabled={!isValid}
        >Зарегистрироваться</button>
      </form>
      <div className="register__inner">
        <span className="register__text">Уже зарегистрированы?</span>
        <Link to='/signin' className="register__link">Войти</Link>
      </div>
    </div>
  );
};