import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      {/* <Main /> */}
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
