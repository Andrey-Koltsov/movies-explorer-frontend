import { useState } from "react";
import "./FilterCheckbox.css";

export default function FilterCheckbox({label = ''}) {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  return (
    <div className="filter-checkbox">
      <button
        type="button"
        className={`filter-checkbox__switch ${active ? 'filter-checkbox__switch_on' : ''}`}
        onClick={handleClick}></button>
        <span className="filter-checkbox__label">{label}</span>
    </div>
  );
};
