import {createSelector} from 'reselect';
import nameSpace from '../name-space.js';

export const getGenreActive = (state) => {
  return state[nameSpace.ACTIONS].genreActive;
};

export const getGenres = (state) => {
  return state[nameSpace.ACTIONS].genres;
};

export const getFilmsCount = (state) => {
  return state[nameSpace.ACTIONS].filmsCount;
};

export const addFilmsCount = (state) => {
  return state[nameSpace.ACTIONS].addFilmsCount;
};


export const getFilms = (state) => {
  return state[nameSpace.DATA].filmList;
};

export const getActiveIdFilm = (state) => {
  return state[nameSpace.ACTIONS].activeFilmId;
};

export const getFilteredList = createSelector(
    getFilms, getGenreActive, (films, genre) => {
      let filteredFilms = films.filter((it) => it.genre === genre);
      return filteredFilms;
    }
);

export const getActiveFilm = createSelector(getFilms, getActiveIdFilm, (films, id) => {
  let activeFilm = films.find((it) => it.id === id);
  debugger
  return activeFilm;

});
