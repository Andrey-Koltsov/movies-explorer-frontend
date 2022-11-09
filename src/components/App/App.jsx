import { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import './App.css';

import CurrentUserContext from '../../context/CurrentUserContext';
import AuthUserContext from '../../context/AuthUserContext';

import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Popup from '../Popup/Popup';
import mainApi from '../../utils/MainApi';

function App() {
  const [isReady, setReady] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [popup, setPopup] = useState({ status: false, text: '' });

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setPopup(prevStat => ({...prevStat, status: false}));
  }, [location]);

  useEffect(() => {
    setReady(false);
    mainApi.getUserInfo()
      .then(user => {
        if (user) {
          setCurrentUser(user);
          setLoggedIn(true);
        }
      })
      .catch(console.log)
      .finally(() => setReady(true));

    if (loggedIn) {
      mainApi.getMovies()
        .then(data => {
          setSavedMovies(data)
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
        if (err.response.status === 409) {
          setPopup({ status: true, text: 'Пользователь с таким E-mail уже существует' });
        } else {
          setPopup({ status: true, text: 'Произошла ошибка на сервере' });
        }
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
      .catch((err) => {
        if (err.response.status === 401) {
          setPopup({ status: true, text: 'Неправильный логин или пароль' });
        } else {
          setPopup({ status: true, text: 'Произошла ошибка на сервере' });
        }
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

  function handleChangeMovie(action, movie) {
    if (action === 'save') {
      mainApi.saveMovie(movie)
        .then(data => setSavedMovies(prevStat => [...prevStat, data]))
        .catch(console.log);
    }
    if (action === 'remove') {
      const id = movie['_id'] ? movie['_id'] : savedMovies.find(item => item.movieId === movie.id)['_id'];
      mainApi.removeMovie(id)
        .then(res => {
          setSavedMovies(prevStat => prevStat.filter(item => item['_id'] !== res['_id']));
        })
        .catch(console.log);
    }
  }

  function handleUpdateUser(data) {
    if ((currentUser.name !== data.name) || (currentUser.email !== data.email)) {
      mainApi.updateUserInfo(data)
        .then(res => {
          setCurrentUser(res);
          setPopup({ status: true, text: 'Данные успешно обновлены!' });
        })
        .catch(err => {
          console.log(err);
          setPopup({ status: true, text: 'Ошибка обновления данных!' });
        });
    } else {
      setPopup({ status: true, text: 'Имя или E-mail не могут быть одинаковыми' });
    }
  }

  function popupClose() {
    setPopup(prevStat => ({...prevStat, status: false}));
  }

  return (
    <div className="app">
      {isReady
        ? <AuthUserContext.Provider value={loggedIn} >
          <CurrentUserContext.Provider value={currentUser} >
            <Switch>
              <ProtectedRoute
                exact
                path="/movies"
                component={Movies}
                savedMovies={savedMovies}
                onChangeMovie={handleChangeMovie}
              />

              <ProtectedRoute
                exact
                path="/saved-movies"
                component={SavedMovies}
                savedMovies={savedMovies}
                onChangeMovie={handleChangeMovie}
              />

              <ProtectedRoute
                exact
                path="/profile"
                component={Profile}
                onSignout={handleSignout}
                onUpdate={handleUpdateUser}
              />

              <Route exact path="/">
                <Main />
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
        </AuthUserContext.Provider>
        : ''
      }
      <Popup
        isOpen={popup.status}
        onClose={popupClose}
        text={popup.text}
      />
    </div>

  );
}

export default App;
