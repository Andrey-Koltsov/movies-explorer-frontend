import "./MoviesCard.css";

export default function MoviesCard() {
  return (
    <div className="movies-card">
      <img src="https://api.nomoreparties.co/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg" alt="" className="movies-card__image" />
      <div className="movies-card__info">
        <div className="movies-card__title">Роллинг Стоунз» в изгнании</div>
        <button className="movies-card__save movies-card__save_saved" type="button"></button>
        <div className="movies-card__time">1ч1м</div>
      </div>
    </div>
  );
};
