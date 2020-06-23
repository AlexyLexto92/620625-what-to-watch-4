import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilmId: 0,

    };
    this.onCardClickHendler = this.onCardClickHendler.bind(this);
  }
  render() {
    const activeFilmId = this.state.activeFilmId;
    const {genre, releaseData, films, onButtonHendler} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main genre={genre} releaseData={releaseData} activeFilmId={activeFilmId} films={films} onButtonHendler={onButtonHendler} onCardClickHendler={this.onCardClickHendler} />
          </Route>
        </Switch>
      </BrowserRouter>
    );

  }
  onCardClickHendler(evt) {
    const id = evt.currentTarget.id;
    this.setState({activeFilmId: Number(id)});
  }
}
App.propTypes = {
  genre: PropTypes.string.isRequired,
  releaseData: PropTypes.number.isRequired,
  films: PropTypes.array,
  onButtonHendler: PropTypes.func,
};

export default App;

