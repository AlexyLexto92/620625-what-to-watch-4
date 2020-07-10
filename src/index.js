import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import {films} from './mocks/films.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer.js';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);
export const settings = {
  genre: `Sport`,
  releaseData: 1992,
};

const onButtonHendler = () => { };
ReactDOM.render(
    <Provider store={store} >
      <App genre={settings.genre} releaseData={settings.releaseData} films={films} onButtonHendler={onButtonHendler} />
    </Provider>,
    document.querySelector(`#root`)
);
