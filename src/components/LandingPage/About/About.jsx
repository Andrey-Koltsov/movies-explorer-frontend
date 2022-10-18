import Container from "../../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import Scale from "./Scale/Scale";
import "./About.css";

export default function About(params) {
  return (
    <section className="about">
      <Container>
        <div className="about__content">
          <SectionTitle title='О проекте' />
          <div className="about__two-columns">
            <div className="about__column">
              <h3 className="about__column-title">Дипломный проект включал 5 этапов</h3>
              <p className="about__column-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className="about__column">
              <h3 className="about__column-title">На выполнение диплома ушло 5 недель</h3>
              <p className="about__column-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
          </div>
          <div className="about__scale">
            <Scale />
          </div>
        </div>
      </Container>
    </section>
  );
};
