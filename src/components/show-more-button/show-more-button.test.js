import React from 'react';
import renderer from 'react-test-renderer';
import ShowMoreButton from './show-more-button.jsx';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import films from '../../mocks/films.js';
const mockStore = configureStore([]);

it(`<button render correct`, () => {
  const store = mockStore({
    filteredList: films,
    filmList: films,
    genreActive: `All genres`,
    filmsCount: 8,
  });
  const tree = renderer.create(<Provider store={store}>
    <ShowMoreButton />
  </Provider>, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();
  expect(tree).toMatchSnapshot();
});
