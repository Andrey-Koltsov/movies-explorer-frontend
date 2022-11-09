import { useEffect, useState } from "react";
import { useFormValidation } from "../../hooks/useFormValidation";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

export default function SearchForm({ searchString, checkbox, onSubmit, onChangeCheckbox }) {
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const {
    values,
    handleChange,
    resetForm,
    checkValidityFormSubmit
  } = useFormValidation();

  useEffect(() => {
    resetForm({ searchString }, {}, true)
  }, [resetForm, searchString]);

  function handleSubmit(evt) {
    evt.preventDefault();
    if (checkValidityFormSubmit(evt)) {
      setShowErrorMessage(false);
      onSubmit(values.searchString);
    } else {
      setShowErrorMessage(true);
    }
  }

  return (
    <div className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit} noValidate>
        <span className="search-form__icon"></span>
        <fieldset className="search-form__fildset">
          <input
            required
            type="text"
            name="searchString"
            className="search-form__input"
            placeholder="Фильм"
            value={values.searchString ? values.searchString : ''}
            onChange={handleChange}
          />
          {showErrorMessage
            ? <span className="serach-form__error">Нужно ввести ключевое слово</span>
            : ''
          }
        </fieldset>
        <button className="search-form__btn" type="submit"></button>
      </form>
      <div className="search-form__filter">
        <FilterCheckbox
          label="Короткометражки"
          checked={checkbox}
          onChange={onChangeCheckbox}
        />
      </div>
    </div>
  );
};
