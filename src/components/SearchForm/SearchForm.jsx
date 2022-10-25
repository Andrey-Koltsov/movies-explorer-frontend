import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

export default function SearchForm() {
  return(
    <div className="search-form">
      <form className="search-form__form">
        <span className="search-form__icon"></span>
        <input type="text" className="search-form__input" placeholder="Фильм" />
        <button className="search-form__btn" type="submit"></button>
      </form>
      <div className="search-form__filter">
        <FilterCheckbox />
        <div className="search-form__label">Короткометражки</div>
      </div>
    </div>
  );
};
