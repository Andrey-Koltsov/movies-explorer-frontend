import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__info">
        <h1 className="not-found__code">404</h1>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <Link to={'/'} className="not-found__link">Назад</Link>
    </div>
  );
};
