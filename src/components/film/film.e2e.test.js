import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Film from '../film/film.jsx';
const film = {
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  descr: `Fantastic Beasts`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`
};
Enzyme.configure({adapter: new Adapter()});

it(`click on Title`, () => {
  const onButtonHendler = jest.fn();
  const filmComponent = shallow(<Film onButtonHendler={onButtonHendler} film={film} />);
  const titleButton = filmComponent.find(`a.small-movie-card__link`);
  titleButton.simulate(`click`);
  expect(onButtonHendler).toHaveBeenCalledTimes(1);
});
