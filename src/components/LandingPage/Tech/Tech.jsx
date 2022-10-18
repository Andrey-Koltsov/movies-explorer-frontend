import Container from "../../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Tech.css";

export default function Tech() {
  return (
    <section className="tech">
      <Container>
        <div className="tech__content">
          <SectionTitle title='Технологии' />
          <h2 className="tech__title">7 технологий</h2>
          <p className="tech__descr">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className="tech__list">
            <li className="tech__item">HTML</li>
            <li className="tech__item">CSS</li>
            <li className="tech__item">JS</li>
            <li className="tech__item">React</li>
            <li className="tech__item">Git</li>
            <li className="tech__item">Express.js</li>
            <li className="tech__item">mongoDB</li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
