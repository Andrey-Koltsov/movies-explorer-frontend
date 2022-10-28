import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export default function MoviesCardList() {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        <li className="movies-card-list__item">
          <MoviesCard />
        </li>
        <li className="movies-card-list__item">
          <MoviesCard />
        </li>
        <li className="movies-card-list__item">
          <MoviesCard />
        </li>
        <li className="movies-card-list__item">
          <MoviesCard />
        </li>
        <li className="movies-card-list__item">
          <MoviesCard />
        </li>
      </ul>
      <button className="movies-card-list__another" type="button">Еще</button>
    </section>
  );
};