import React from "react";
import Main from "./main.jsx";
import PropTypes from 'prop-types';
const App = (props) => {
  const {genre, releaseData, films} = props;
  return (
    <Main genre={genre} releaseData={releaseData} films={films} />
  );
};
App.propTypes = {
  genre: PropTypes.string.isRequired,
  releaseData: PropTypes.number.isRequired,
  films: PropTypes.array,
};

export default App;
