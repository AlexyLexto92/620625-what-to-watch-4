import extend from '../../utils.js';

const initialState = {
  filteredList: [],
  genres: [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`],
  genreActive: `All genres`,
  filmsCount: 8,
  addFilmsCount: 8,
};
const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  ADD_FILMS: `ADD_FILMS`,
  RELOAD_FILM_COUNT: `RELOAD_FILM_COUNT`,
};

const ActionCreator = {
  changeFilter: (genre) => ({
    type: ActionType.CHANGE_FILTER,
    payload: genre,
  }),
  addFilms: () => ({
    type: ActionType.ADD_FILMS,
    payload: 8,
  }),
  reloadFilmsCount: () => ({
    type: ActionType.RELOAD_FILM_COUNT,
    payload: 8,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER:
      return extend(state, {
        genreActive: action.payload
      });
    case ActionType.ADD_FILMS:
      return extend(state, {
        filmsCount: state.filmsCount + action.payload
      });
    case ActionType.RELOAD_FILM_COUNT: {
      return extend(state, {
        filmsCount: action.payload
      });
    }
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
