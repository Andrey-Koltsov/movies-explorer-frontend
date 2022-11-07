import "./FilterCheckbox.css";

export default function FilterCheckbox({ name, checked, onChange, label = '' }) {
  return (
    <label className="filter-checkbox">
      <input
        className="filter-checkbox__input"
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <span
        type="button"
        className={`filter-checkbox__switch ${checked ? 'filter-checkbox__switch_on' : ''}`}
      ></span>
      <span className="filter-checkbox__label">{label}</span>
    </label>
  );
};
