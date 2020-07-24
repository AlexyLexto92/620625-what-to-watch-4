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


export const getFilteredList = createSelector(
    getFilms, getGenreActive, (films, genre) => {
      let filteredFilms = films.filter((it) => it.genre === genre);
      return filteredFilms;
    }
);
