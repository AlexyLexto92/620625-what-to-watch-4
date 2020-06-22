import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import {films} from './mocks/films.js';
export const settings = {
  genre: `Sport`,
  releaseData: 1992,
};

const onButtonHendler = ()=>{};
ReactDOM.render(
    <App genre={settings.genre} releaseData={settings.releaseData} films= {films} onButtonHendler={onButtonHendler} />,
    document.querySelector(`#root`)
);
