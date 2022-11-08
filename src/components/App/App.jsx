import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';

import CurrentUserContext from '../../context/CurrentUserContext';

import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import mainApi from '../../utils/MainApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isReady, setIsReady] = useState(false);
  const [myMovies, setMyMovies] = useState([]);
  const [updateUserMessage, setUpdateUserMessage] = useState('');

  const history = useHistory();

  useEffect(() => {
    setIsReady(false);
    mainApi.getUserInfo()
      .then(user => {
        if (user) {
          setCurrentUser(user);
          setLoggedIn(true);
        }
      })
      .catch(console.log)
      .finally(() => setIsReady(true));

    if (loggedIn) {
      mainApi.getMovies()
        .then(data => {
          console.log(data);
          setMyMovies(data)
        })
        .catch(console.log);
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
        localStorage.clear();
      })
      .catch(err => {
        console.log(err)
      });
  }

  function handleSaveMovie(movieData) {
    mainApi.saveMovie(movieData)
      .then(data => setMyMovies([...myMovies, data]))
      .catch(console.log);
    console.log('SAVE', movieData);
  }

  function handleRemoveMovie(movieData) {
    let id;
    if (movieData['_id']) {
      id = movieData['_id'];
    } else {
      id = myMovies.find(item => item.movieId === movieData.id)['_id'];
    }
    console.log('REMOVE', id);
    mainApi.removeMovie(id)
      .then(res => {
        setMyMovies(myMovies.filter(item => item['_id'] !== res['_id']))
      })
      .catch(console.log);
  }

  function handleUpdateUser(data) {
    mainApi.updateUserInfo(data)
      .then(res => {
        setCurrentUser(res);
        console.log(res);
        setUpdateUserMessage('Данные успешно обновлены!')
      })
      .catch(err => {
        console.log(err);
        setUpdateUserMessage('Ошибка обновления данных!')
      });
  }

  return (
    <div className="app">
      {isReady
        ? <CurrentUserContext.Provider value={currentUser} >
          <Switch>
            <ProtectedRoute
              path="/movies"
              component={Movies}
              loggedIn={loggedIn}
              onSaveMovie={handleSaveMovie}
              onRemoveMovie={handleRemoveMovie}
              myMovies={myMovies}
            />

            <ProtectedRoute
              path="/saved-movies"
              component={SavedMovies}
              loggedIn={loggedIn}
              myMovies={myMovies}
              onRemoveMovie={handleRemoveMovie}
            />

            <ProtectedRoute
              exact
              path="/profile"
              component={Profile}
              loggedIn={loggedIn}
              onSignout={handleSignout}
              onUpdate={handleUpdateUser}
              message={updateUserMessage}
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
        : ''
      }
    </div>
  );
}

export default App;
