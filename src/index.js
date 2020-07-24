import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import {films} from './mocks/films.js';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from 'react-redux';
import reducer from './reducer.js';
import thunk from 'redux-thunk';
import {Operation as DataOperation} from "./reducer/data/data.js";
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from "./reducer/user/user.js";
import {createAPI} from './api/api.js';
const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    ));
export const settings = {
  genre: `Sport`,
  releaseData: 1992,
};

const onButtonHendler = () => { };
store.dispatch(DataOperation.loadFilms());
store.dispatch(UserOperation.checkAuth());
ReactDOM.render(
    <Provider store={store} >
      <App genre={settings.genre} releaseData={settings.releaseData} films={films} onButtonHendler={onButtonHendler} />
    </Provider>,
    document.querySelector(`#root`)
);
