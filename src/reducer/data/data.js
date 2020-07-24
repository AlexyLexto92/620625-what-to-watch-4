import extend from '../../utils.js';

const initialState = {
  filmList: [],
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
};

const ActionCreator = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };
  }
};

const Operation = {
  loadFilms: ()=> (dispatch, getState, api)=>{
    return api.get(`/films`)
    .then((response)=>{
      dispatch(ActionCreator.loadFilms(response.data));
    });
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {filmList: action.payload});
  }
  return state;
};
export {reducer, ActionType, ActionCreator, Operation};
