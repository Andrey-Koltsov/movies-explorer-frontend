import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

export default function SearchForm() {
  const [searchValue, setSearchValue] = useState('');

  function handleChangeInput(evt) {
    setSearchValue(evt.target.value);
  }

  return (
    <div className="search-form">
      <form className="search-form__form">
        <span className="search-form__icon"></span>
        <input
          required
          type="text"
          className="search-form__input"
          placeholder="Фильм"
          onChange={handleChangeInput}
          value={searchValue}
        />
        <button className="search-form__btn" type="submit"></button>
      </form>
      <div className="search-form__filter">
        <FilterCheckbox label="Короткометражки" />
      </div>
    </div>
  );
};
