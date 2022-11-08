import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BEATFILM_URL } from "../../utils/constants";
import "./MoviesCard.css";

export default function MoviesCard({ movie, onSaveMovie, onRemoveMovie, isSaved }) {
  const [saved, setSaved] = useState(isSaved);
  const { pathname } = useLocation();

  function durationToString(duration) {
    const hours = Math.floor(duration / 60);
    const minuts = duration % 60;
    return `${hours ? hours + 'ч ' : ''}${minuts}м`
  }

  function handleToggle() {
    if (saved) {
      onRemoveMovie(movie);
    } else {
      onSaveMovie(movie);
    }
    setSaved(!saved);
  }

  function handleRemove() {
    onRemoveMovie(movie);
  }

  return (
    <div className="movies-card">
      <img src={movie.thumbnail ? movie.thumbnail : BEATFILM_URL + movie.image.url} alt="Постер фильма" className="movies-card__image" />
      <div className="movies-card__info">
        <div className="movies-card__title">{movie.nameRU}</div>
        {pathname === '/saved-movies'
          ? <button className="movies-card__remove" type="button" onClick={handleRemove} />
          : <button className={`movies-card__save ${saved ? 'movies-card__save_saved' : ''}`} type="button" onClick={handleToggle} />
        }
        <div className="movies-card__time">{durationToString(movie.duration)}</div>
      </div>
    </div>
  );
};
