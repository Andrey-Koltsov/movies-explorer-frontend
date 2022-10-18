import Container from "../../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Student.css";
import photoImage from "../../../images/photo.jpg";

export default function Student() {
  return (
    <section className="student">
      <Container>
        <div className="student__content">
          <SectionTitle title='Студент' />
          <div className="student__columns">
            <div className="student__info">
              <div className="student__name">Андрей</div>
              <div className="student__proffesion">Фронтенд-разработчик, 30 лет</div>
              <div className="student__about">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</div>
              <div className="student__social">Github</div>
            </div>
            <div className="student__photo">
              <img src={photoImage} alt="Фото студента" className="student__image" />
            </div>
          </div>

          <div className="student__portfolio">
            <div className="student__subtitle">Портфолио</div>
            <ul className="student__projects-list">
              <li className="student__project">
                <div className="student__project-name">Статичный сайт</div>
                <div className="student__project-link">↗</div>
              </li>
              <li className="student__project">
                <div className="student__project-name">Адаптивный сайт</div>
                <div className="student__project-link">↗</div>
              </li>
              <li className="student__project">
                <div className="student__project-name">Одностраничное приложение</div>
                <div className="student__project-link">↗</div>
              </li>
            </ul>
          </div>

        </div>
      </Container>
    </section>
  );

};
