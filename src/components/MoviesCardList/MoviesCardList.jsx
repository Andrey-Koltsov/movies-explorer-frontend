import useCounterCard from "../../hooks/useCounterCard";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export default function MoviesCardList({ movies, onSaveMovie, onRemoveMovie }) {
  const { count, step } = useCounterCard();

  function handleAnother() {
    step()
  }

  return (
    <section className="movies-card-list">
      {movies.length
        ? <ul className="movies-card-list__list">
          {movies.slice(0, count).map(movie => {
            return (
              <li key={movie.id ? movie.id : movie['_id']} className="movies-card-list__item">
                <MoviesCard movie={movie} onSaveMovie={onSaveMovie} onRemoveMovie={onRemoveMovie} isSaved={false} />
              </li>
            )
          })}
        </ul>
        : <p className="movies-card-list__info">Ничего не найдено</p>
      }
      {movies.length >= count
        ? <button className="movies-card-list__another" type="button" onClick={handleAnother}>Еще</button>
        : ''
      }
    </section>
  );
};