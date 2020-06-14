import React from 'react';
import renderer from 'react-test-renderer';
import Film from '../film/film.jsx';
const film = {
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  descr: `Fantastic Beasts`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`
};
it(`<Film render film`, () => {
  const tree = renderer.create(<Film film={film} />).toJSON();
  expect(tree).toMatchSnapshot();
});
