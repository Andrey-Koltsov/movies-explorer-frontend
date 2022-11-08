import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import { useFormValidation } from "../../hooks/useFormValidation";
import Header from "../Header/Header";
import "./Profile.css";

export default function Profile({ onSignout, loggedIn, onUpdate, message }) {
  const currentUser = useContext(CurrentUserContext);
  const {
    values,
    handleChange,
    isValid,
    errors,
  } = useFormValidation({ name: currentUser.name, email: currentUser.email });

  function handleBtnSignout() {
    onSignout();
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdate({ name: values.name, email: values.email });
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
                value={values.name ? values.name : ''}
                onChange={handleChange}
                minLength="2"
                maxLength="30"
              />
            </fieldset>
            {errors.name && <span className="profile__error">{errors.name}</span>}
            <fieldset className="profile__fieldset">
              <label htmlFor="profile-email" className="profile__label">E-mail</label>
              <input
                required
                type="email"
                className="profile__input"
                id="profile-email"
                placeholder="Введите ваш e-mail"
                name="email"
                value={values.email ? values.email : ''}
                onChange={handleChange}
              />
            </fieldset>
            {errors.email && <span className="profile__error">{errors.email}</span>}
          </div>
          <div className="profile__submit">
            {message && <span className="profile__error">{message}</span>}
            <button
              type="submit"
              className={`profile__btn profile__btn_type_submit ${isValid ? '' : 'profile__btn_disable'}`}
              disabled={!isValid}
            >Редактировать</button>
          </div>
        </form>
        <button type="button" className="profile__btn profile__btn_type_exit" onClick={handleBtnSignout}>Выйти из аккаунта</button>
      </main>
    </>
  );
};
