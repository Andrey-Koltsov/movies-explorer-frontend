import Movies from '../Movies/Movies';
import Main from '../Main/Main';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path={"/"}>
          <Main />
        </Route>
        <Route path={"/movies"}>
          <Movies />
        </Route>
        <Route path={"/saved-movies"}>
          <SavedMovies />
        </Route>
        <Route path={"/profile"}>
          <Profile />
        </Route>
        <Route path={"/signin"}>
          <Login />
        </Route>
        <Route path={"/signup"}>
          <Register />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
