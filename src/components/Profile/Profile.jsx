import { useContext, useState } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import { useFormValidation } from "../../hooks/useFormValidation";
import Header from "../Header/Header";
import "./Profile.css";

export default function Profile({ onSignout, loggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const {
    values,
    handleChange,
    isValid,
    errors,
    resetForm,
  } = useFormValidation();

  console.log('render component');

  function handleBtnSignout() {
    onSignout();
    console.log('logout');
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    resetForm();
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__form-block">
            <fieldset className="profile__fieldset">
              <label htmlFor="profile-name" className="profile__label">Имя</label>
              <input
                required
                type="text"
                className="profile__input"
                id="profile-name"
                placeholder="Введите ваше имя"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </fieldset>
            <span className="register__error">{errors.name}</span>
            <fieldset className="profile__fieldset">
              <label htmlFor="profile-email" className="profile__label">E-mail</label>
              <input
                required
                type="email"
                className="profile__input"
                id="profile-email"
                placeholder="Введите ваш e-mail"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </fieldset>
            <span className="register__error">{errors.email}</span>
          </div>

          <button type="submit" className="profile__btn profile__btn_type_submit">Редактировать</button>
        </form>
        <button type="button" className="profile__btn profile__btn_type_exit" onClick={handleBtnSignout}>Выйти из аккаунта</button>
      </main>
    </>
  );
};
