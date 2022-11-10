import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import { useFormValidation } from "../../hooks/useFormValidation";
import "./Profile.css";

import Header from "../Header/Header";
import { useEffect } from "react";

export default function Profile({ onSignout, onUpdate }) {
  const currentUser = useContext(CurrentUserContext);
  const {
    values,
    handleChange,
    isValid,
    errors,
    setIsValid
  } = useFormValidation({ name: currentUser.name, email: currentUser.email });

  console.log('ISVALID', isValid);
  useEffect(() => {
    setIsValid(((currentUser.name !== values.name) || (currentUser.email !== values.email)) && isValid)
  }, [setIsValid, currentUser, values, isValid]);

  function handleBtnSignout() {
    onSignout();
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdate({ name: values.name, email: values.email });
  }

  return (
    <>
      <Header />
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
