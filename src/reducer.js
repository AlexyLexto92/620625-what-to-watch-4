import extend from './utils.js';

import films from './mocks/films.js';
const initialState = {
  filmList: films,
  filteredList: films,
  genres: [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`],
  genreActive: `All genres`,
};
export const ActionType = {
  FILTERED_FILMS: `FILTERED_FILMS`,
  CHANGE_FILTER: `CHANGE_FILTER,`
};

export const ActionCreator = {
  filterFilms: (genre) => ({
    type: ActionType.FILTERED_FILMS,
    payload: genre,
  }),
  changeFilter: (genre) => ({
    type: ActionType.CHANGE_FILTER,
    payload: genre,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTERED_FILMS:
      return extend(state, {
        filteredList: state.filmList.filter((e)=> e.genre === action.payload)
      });
    case ActionType.CHANGE_FILTER:
      return extend(state, {
        genreActive: action.payload
      });
  }
  return state;
};

export default reducer;
