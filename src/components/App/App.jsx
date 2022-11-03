import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';

import CurrentUserContext from '../../context/CurrentUserContext';

import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ProtectedRoute from '../ProtectedRoute';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import Header from '../Header/Header';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);

  const history = useHistory();

  useEffect(() => {
    mainApi.getUserInfo()
      .then(user => {
        if (user) {
          setCurrentUser(user);
          setLoggedIn(true);
        }
      })
      .catch(console.log);

    if (loggedIn) {
      moviesApi.getMovies()
        .then(data => {
          console.log(data);
          setMovies(data);
        })
        .catch(console.log);;
    }
  }, [loggedIn]);

  function handleRegister({ name, email, password }) {
    mainApi.register({ name, email, password })
      .then(data => {
        console.log(data);
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch(err => {
        console.log(err)
      });
  }

  function handleLogin({ email, password }) {
    mainApi.auth({ email, password })
      .then(data => {
        console.log(data);
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch(err => {
        console.log(err)
      });
  }

  function handleSignout() {
    mainApi.signout()
      .then(data => {
        console.log(data);
        setLoggedIn(false);
        history.push('/');
      })
      .catch(err => {
        console.log(err)
      });
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser} >
        <Switch>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            movies={movies}
          />

          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
          />

          <ProtectedRoute
            exact
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            onSignout={handleSignout}
          />

          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>

          <Route exact path="/signup">
            <Register onRegister={handleRegister} />
          </Route>

          <Route exact path="/signin">
            <Login onLogin={handleLogin} />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
