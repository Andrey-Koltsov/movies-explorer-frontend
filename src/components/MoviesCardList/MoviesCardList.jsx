import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export default function MoviesCardList({ list }) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {list.map(movie => {
          return <li key={movie.id} className="movies-card-list__item">
            <MoviesCard movie={movie} />
          </li>
        })}
      </ul>
      <p className="movies-card-list__info">123</p>
      <button className="movies-card-list__another" type="button">Еще</button>
    </section>
  );
};