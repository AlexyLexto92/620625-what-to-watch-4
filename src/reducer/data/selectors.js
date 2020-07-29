import {createSelector} from 'reselect';
import nameSpace from '../name-space.js';
export const getFilms = (state) => {
  return state[nameSpace.DATA].filmList;
};

export const getFilter = (state) => {
  return state[nameSpace.ACTIONS].genreActive;
};

export const getFilteredList = createSelector(
    getFilms, getFilter, (resultOne, resultTwo) => {
      return resultOne.filter((it) => it.genre === resultTwo);
    }
);
export const getCommentUploadStatus = (state) => {
  return state[nameSpace.ACTIONS].commentUploadStatus;
};
