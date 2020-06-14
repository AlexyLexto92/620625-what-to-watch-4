import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
export const settings = {
  genre: `Sport`,
  releaseData: 1992,
};
export const films = [{
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  descr: `Fantastic Beasts`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`
},
{
  img: `img/bohemian-rhapsody.jpg`,
  descr: `Bohemian Rhapsody`,
  title: `Bohemian Rhapsody`
}
];
ReactDOM.render(
    <App genre={settings.genre} releaseData={settings.releaseData} films= {films} />,
    document.querySelector(`#root`)
);
