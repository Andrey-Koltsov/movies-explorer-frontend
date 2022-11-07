import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export default function MoviesCardList({ movies }) {
  return (
    <section className="movies-card-list">
      {movies.length
        ? <ul className="movies-card-list__list">
            {movies.map(movie => {
              return <li key={movie.id} className="movies-card-list__item">
                <MoviesCard movie={movie} />
              </li>
            })}
          </ul>
        : <p className="movies-card-list__info">123</p>
      }
    </section>
  );
};