import Films from '../Films/Films';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import LandingPage from '../LandingPage/LandingPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <LandingPage /> */}
      <Films />
      <Footer />
    </div>
  );
}

export default App;
