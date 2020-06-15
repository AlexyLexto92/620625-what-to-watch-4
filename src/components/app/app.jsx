import React from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';
const App = (props) => {
  const {genre, releaseData, films, onButtonHendler} = props;
  return (
    <Main genre={genre} releaseData={releaseData} films={films} onButtonHendler={onButtonHendler} />
  );
};
App.propTypes = {
  genre: PropTypes.string.isRequired,
  releaseData: PropTypes.number.isRequired,
  films: PropTypes.array,
  onButtonHendler: PropTypes.func,
};

export default App;
