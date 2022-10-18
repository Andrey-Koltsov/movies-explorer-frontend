import About from "./About/About";
import Promo from "./Promo/Promo";
import Student from "./Student/Student";
import Tech from "./Tech/Tech";

export default function LandingPage() {
  return (
    <main className="landing-page">
      <Promo />
      <About />
      <Tech />
      <Student />
    </main>
  );
};
