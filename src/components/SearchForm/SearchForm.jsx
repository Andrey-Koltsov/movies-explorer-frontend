import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

export default function SearchForm() {
  return(
    <div className="search">
      <form className="search__form">
        <span className="search__icon"></span>
        <input type="text" className="search__input" placeholder="Фильм" />
        <button className="search__btn" type="submit"></button>
      </form>
      <div className="search__filter">
        <FilterCheckbox />
        <div className="search__filter-label">Короткометражки</div>
      </div>
    </div>
  );
};
