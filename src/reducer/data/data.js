import extend from '../../utils.js';

const initialState = {
  filmList: [],
  commentUploadStatus: false,
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  UPLOAD_COMMENTS: `UPLOAD_COMMENTS`,
};

const ActionCreator = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };
  },
  uploadComment: () => {
    return {
      type: ActionType.UPLOAD_COMMENTS,
      payload: true,
    };
  },
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(response.data));
      });
  },
  uploadComment: (comments, id) => (dispatch, getState, api) => {
    return api.post(`/comments/${id}`, {
      rating: comments.rating,
      comment: comments.comment,
    })
      .then((response) => {
        dispatch(ActionCreator.uploadComment(response));
      });
  }
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {filmList: action.payload});
    case ActionType.UPLOAD_COMMENTS:
      return extend(state, {comment: action.payload});
  }
  return state;
};
export {reducer, ActionType, ActionCreator, Operation};
