import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../main/main.jsx';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {films} from '../../mocks/films.js';
const mockStore = configureStore([]);

const settings = {
  genre: `Sport`,
  releaseData: 1992,
};
it(`<Main> renderer Main`, () => {
  const store = mockStore({
    filmList: films,
    filteredList: films,
    genres: [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`],
    genreActive: `All genres`,
  });
  const tree = renderer.create(
      <Provider store={store}>
        <Main genre={settings.genre} releaseData={settings.releaseData} films={films} />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();
  expect(tree).toMatchSnapshot();
});
