import Header from "../Header/Header";
import "./Profile.css";

export default function Profile() {
  return (
    <>
      <Header />
      <main className="profile">
        <h1 className="profile__title">Привет, Андрей!</h1>
        <form className="profile__form">
          <fieldset className="profile__fieldset">
            <label htmlFor="profile-name" className="profile__label">Имя</label>
            <input type="text" className="profile__input" id="profile-name" placeholder="Введите ваше имя"/>
          </fieldset>
          <fieldset className="profile__fieldset">
            <label htmlFor="profile-email" className="profile__label">E-mail</label>
            <input type="text" className="profile__input" id="profile-email" placeholder="Введите ваш e-mail"/>
          </fieldset>
          <button className="profile__btn profile__btn_type_submit">Редактировать</button>
        </form>
        <button className="profile__btn profile__btn_type_exit">Выйти из аккаунта</button>
      </main>
    </>
  );
};
