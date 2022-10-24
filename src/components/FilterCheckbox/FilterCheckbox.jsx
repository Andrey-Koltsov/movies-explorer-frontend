import { useState } from "react";
import "./FilterCheckbox.css";

export default function FilterCheckbox() {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  return (
    <button type="button" className={`filter-checkbox ${active ? 'filter-checkbox_on' : ''}`} onClick={handleClick}></button>
  );
};
