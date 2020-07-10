import React from 'react';
import renderer from 'react-test-renderer';
import {GanresList} from './ganres-list.jsx';
const filterFilms = jest.fn();
const changeFilter = jest.fn();
const genreActive = `All genres`;
const genres = [`All genres`];

it(`GanresList render GanresList`, () => {
  const tree = renderer.create(<GanresList filterFilms = {filterFilms} changeFilter = {changeFilter} genreActive={genreActive} genres={genres} />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();
  expect(tree).toMatchSnapshot();
});
