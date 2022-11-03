import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export default function MoviesCardList({ movies }) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {movies.map(movie => {
          return <li key={movie.id} className="movies-card-list__item">
            <MoviesCard movie={movie} />
          </li>
        })}
      </ul>
      <button className="movies-card-list__another" type="button">Еще</button>
    </section>
  );
};