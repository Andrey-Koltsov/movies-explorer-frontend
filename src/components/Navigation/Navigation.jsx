import { useState } from "react";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState(true);

  function handleClickMenu() {
    setActiveMenu(!activeMenu);
  }

  return (
    <nav className="navigation">
      <div className="navigation__landing">
        <div className="navigation__block navigation__block_type_login">
          <Link to='/signup' className='navigation__link navigation__link_bold'>Регистрация</Link>
          <Link to='/signin' className='navigation__link navigation__link_color_green'>Войти</Link>
        </div>
      </div>
      <div className={`navigation__main ${activeMenu ? 'navigation__main_slider' : ''} `}>
        <div className="navigation__block navigation__block_type_menu">
          <NavLink to='/' className='navigation__link navigation__link_visible_slider' activeClassName="navigation__link_active">Главная</NavLink>
          <NavLink to='/movies' className='navigation__link' activeClassName="navigation__link_active">Фильмы</NavLink>
          <NavLink to='/saved-movies' className='navigation__link' activeClassName="navigation__link_active">Сохранённые фильмы</NavLink>
        </div>
        <div className="navigation__block navigation__block_type_account">
          <Link to='/profile' className='navigation__link navigation__link_bold'>Аккаунт</Link>
          <span className="navigation__account-icon" />
        </div>
      </div>
      <button className="navigation__menu-btn" type="button" onClick={handleClickMenu}>
        <span className={`navigation__menu-icon ${activeMenu ? 'navigation__menu-icon_active' : ''}`}></span>
      </button>
    </nav>
  );
};
