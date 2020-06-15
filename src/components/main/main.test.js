import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../main/main.jsx';
const settings = {
  genre: `Sport`,
  releaseData: 1992,
};
const films = [{
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
it(`<Main> renderer Main`, () => {
  const tree = renderer.create(<Main genre={settings.genre} releaseData={settings.releaseData} films={films} />).toJSON();
  expect(tree).toMatchSnapshot();
});
