import { useState } from "react";
import { useFormValidation } from "../../hooks/useFormValidation";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

export default function SearchForm({ onSubmit, checkbox, searchValue }) {
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const {
    values,
    handleChange,
    isValid,
  } = useFormValidation({searchValue, shortMovies: checkbox});

  function handleSubmit(evt) {
    evt.preventDefault();
    const { searchValue, shortMovies } = values;
    if (isValid) {
      setShowErrorMessage(false);
      onSubmit({ searchValue, shortMovies });
    } else {
      setShowErrorMessage(true);
    }
  }

  return (
    <div className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit} noValidate>
        <div className="search-form__search">
          <span className="search-form__icon"></span>
          <fieldset className="search-form__fildset">
            <input
              required
              type="text"
              name="searchValue"
              className="search-form__input"
              placeholder="Фильм"
              value={values.searchValue ? values.searchValue : ''}
              onChange={handleChange}
            />
            {showErrorMessage
              ? <span className="serach-form__error">Нужно ввести ключевое слово</span>
              : ''
            }
          </fieldset>
          <button className="search-form__btn" type="submit"></button>
        </div>
        <div className="search-form__filter">
          <FilterCheckbox
            name="shortMovies"
            label="Короткометражки"
            checked={values.shortMovies ? values.shortMovies : false}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};
