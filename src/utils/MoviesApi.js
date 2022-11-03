class MoviesApi {
  constructor(url) {
    this.url = url;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}, ${res.statusText}`);
  }

  getMovies() {
    return fetch(this.url).then(this._checkResponse);
  }


}

const moviesApi = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');
export default moviesApi;