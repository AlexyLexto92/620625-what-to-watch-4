import React from "react";
import Main from "./main.jsx";
const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {genre, releaseData} = props;
  return (
    <Main genre={genre} releaseData={releaseData} />
  );
};

export default App;
