import Container from "../Container/Container";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <Container>
        <div className="portfolio__title">Портфолио</div>
        <ul className="portfolio__projects">
          <li className="portfolio__item">
            <div className="portfolio__project-name">Статичный сайт</div>
            <div className="portfolio__project-link">↗</div>
          </li>
          <li className="portfolio__item">
            <div className="portfolio__project-name">Адаптивный сайт</div>
            <div className="portfolio__project-link">↗</div>
          </li>
          <li className="portfolio__item">
            <div className="portfolio__project-name">Одностраничное приложение</div>
            <div className="portfolio__project-link">↗</div>
          </li>
        </ul>
      </Container >
    </section>
  );
};
