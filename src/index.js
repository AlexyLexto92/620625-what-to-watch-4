import React from "react";
import ReactDOM from "react-dom";
import App from './components/app.jsx';
const settings = {
  genre: `Sport`,
  releaseData: 1992,
};
ReactDOM.render(
    <App genre={settings.genre} releaseData={settings.releaseData} />,
    document.querySelector(`#root`)
);
