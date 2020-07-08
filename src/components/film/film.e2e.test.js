import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Film from '../film/film.jsx';
const film = {
  backgroundColor: `#A6B7AC`,
  backgroundImage: `https://htmlacademy-react-2.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`,
  description: `In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father's killer.`,
  director: `Martin Scorsese`,
  genre: `Crime`,
  id: 1,
  isfavorite: false,
  name: `Gangs of new york`,
  posterImage: `https://htmlacademy-react-2.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`,
  previewImage: `https://htmlacademy-react-2.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  rating: 8.8,
  released: 2002,
  runTime: 167,
  scoresCount: 370881,
  starring: [`Leonardo DiCaprio`, `Cameron Diaz`, `Daniel Day-Lewis`],
  videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
};
Enzyme.configure({adapter: new Adapter()});

it(`click on Title`, () => {
  const onButtonHendler = jest.fn();
  const onHoverHeandler = jest.fn();
  const filmComponent = shallow(<Film onButtonHendler={onButtonHendler} film={film} onHoverHeandler={onHoverHeandler} />);
  const titleButton = filmComponent.find(`a.small-movie-card__link`);
  titleButton.simulate(`click`);
  expect(onButtonHendler).toHaveBeenCalledTimes(1);
});

it(`click on filmCard`, () => {
  const onButtonHendler = jest.fn();
  const handlerMouseEnter = jest.fn();
  const onCardClickHendler = jest.fn();
  const filmComponent = shallow(<Film onButtonHendler={onButtonHendler} film={film} onHoverHeandler={handlerMouseEnter} onCardClickHendler={onCardClickHendler} />);
  const card = filmComponent.find(`article.small-movie-card`).first();
  card.simulate(`click`, {
    activeFilmId: 1,
  });
  expect(onCardClickHendler).toHaveBeenCalledWith({activeFilmId: 1});
});
