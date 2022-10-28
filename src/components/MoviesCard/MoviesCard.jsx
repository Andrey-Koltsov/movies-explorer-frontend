import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

export default function MoviesCard() {
  const [saved, setSaved] = useState(false);
  const { pathname } = useLocation();

  function handleClockSaved() {
    setSaved(!saved);
  }

  return (
    <div className="movies-card">
      <img src="https://api.nomoreparties.co/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg" alt="Постер фильма" className="movies-card__image" />
      <div className="movies-card__info">
        <div className="movies-card__title">Роллинг Стоунз» в изгнании</div>
        {pathname === '/saved-movies' ?
          <button className="movies-card__remove" type="button" />
          :
          <button className={`movies-card__save ${saved ? 'movies-card__save_saved' : ''}`} type="button" onClick={handleClockSaved} />
        }
        <div className="movies-card__time">1ч1м</div>
      </div>
    </div>
  );
};
