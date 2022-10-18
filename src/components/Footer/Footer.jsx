import Container from "../Container/Container";
import "./Footer.css";

export default function Footer() {
  return(
    <footer className="footer">
      <Container>
        <div className="footer__content">
          <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className="footer__columns">
            <div className="footer__copyright">© 2022</div>
            <div className="footer__sites">
              <div className="footer__limk">Яндекс.Практикум</div>
              <div className="footer__limk">Github</div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
