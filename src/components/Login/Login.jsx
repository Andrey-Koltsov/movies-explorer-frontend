import { Link } from "react-router-dom";
import { useFormValidation } from "../../hooks/useFormValidation";
import Logotype from "../Logotype/Logotype";
import "./Login.css";

export default function Login({ onLogin }) {
  const {
    values,
    handleChange,
    isValid,
    errors,
    inputsValid,
    checkValidityFormSubmit
  } = useFormValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    if (checkValidityFormSubmit(evt)) {
      const { email, password } = values;
      onLogin({ email, password });
    }
  }

  return (
    <div className="login">
      <Logotype />
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form" onSubmit={handleSubmit} noValidate>
        <fieldset className="login__fieldset">
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
          className={`login__submit ${isValid ? "" : "login__submit_disable"} `}
          type="submit"
          disabled={!isValid}
        >Войти</button>
      </form>
      <div className="login__inner">
        <span className="login__text">Ещё не зарегистрированы?</span>
        <Link to='/signup' className="login__link">Регистрация</Link>
      </div>
    </div>
  );
};
