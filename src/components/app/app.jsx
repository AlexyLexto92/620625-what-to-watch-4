import React, { PureComponent } from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';
import { AuthorizationStatus } from "../../reducer/user/user.js";
import { getAuthorizationStatus } from "../../reducer/user/selectors.js";
import { getFilms } from '../../reducer/data/selectors.js';
import { connect } from "react-redux";
import { Operation as UserOperation } from '../../reducer/user/user.js';
import FullPlayer from "../full-player/full-player.jsx";
import SingIn from "../sing-in/sing-in.jsx";
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import history from "../../history.js";
import { RouteConst } from '../../utils.js';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilmId: 0,
      isShowFullPlayer: false,
    };
    this.handlerButtonClick = this.handlerButtonClick.bind(this);
    this.handlerButtonCloseClick = this.handlerButtonCloseClick.bind(this);

    this.onCardClickHendler = this.onCardClickHendler.bind(this);
  }
  handlerButtonClick() {
    this.setState({
      isShowFullPlayer: true,
    });
  }
  handlerButtonCloseClick() {
    this.setState({
      isShowFullPlayer: false,
    });
  }

  _renderScreen() {
    const activeFilmId = this.state.activeFilmId;
    const { isShowFullPlayer } = this.state;
    const { genre, releaseData, filmList, onButtonHendler, login, authorizationStatus } = this.props;
    const currentFilm = filmList.find((elem) => elem.id === activeFilmId);
    if (isShowFullPlayer) {
      return <FullPlayer currentFilm={filmList[0]} handlerButtonCloseClick={this.handlerButtonCloseClick} />;
    } if (authorizationStatus === AuthorizationStatus.AUTH) {
      return <Main genre={genre}
        releaseData={releaseData}
        currentFilm={currentFilm}
        activeFilmId={activeFilmId}
        films={filmList}
        onButtonHendler={onButtonHendler}
        onCardClickHendler={this.onCardClickHendler}
        isShowFullPlayer={isShowFullPlayer}
        handlerButtonClick={this.handlerButtonClick}
        handlerButtonCloseClick={this.handlerButtonCloseClick}
        prewiewFilm={filmList[0]} />;
    } else if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return <SingIn onSubmit={login} />;
    }
    return null;

  }
  render() {
    const { isShowFullPlayer } = this.state;
    const { genre, releaseData, filmList, onButtonHendler, login, authorizationStatus } = this.props;
    const activeFilmId = this.state.activeFilmId;
    const currentFilm = filmList.find((elem) => elem.id === activeFilmId);

    return (
      <Router history={history}>
        <Switch>
          <Route exact path={RouteConst.ROOT}>
            {this._renderScreen()}
          </Route>
          <Route exact path={RouteConst.SING_IN}
            render={() => {
              return authorizationStatus === AuthorizationStatus.NO_AUTH ?
                <SingIn onSubmit={login} /> :
                <Redirect to={
                  <Main genre={genre}
                    releaseData={releaseData}
                    currentFilm={currentFilm}
                    activeFilmId={activeFilmId}
                    films={filmList}
                    onButtonHendler={onButtonHendler}
                    onCardClickHendler={this.onCardClickHendler}
                    isShowFullPlayer={isShowFullPlayer}
                    handlerButtonClick={this.handlerButtonClick}
                    handlerButtonCloseClick={this.handlerButtonCloseClick}
                    prewiewFilm={filmList[0]} />
                } />;
            }}>
          </Route>
          <Route exact path={RouteConst.PLAYER} >
            <FullPlayer currentFilm={filmList[0]} handlerButtonCloseClick={this.handlerButtonCloseClick} />
          </Route >
        </Switch >
      </Router >
    );
  }

  onCardClickHendler(evt) {
    const id = evt.currentTarget.id;
    this.setState({ activeFilmId: Number(id) });
  }

}
const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  filmList: getFilms(state),

});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});
App.propTypes = {
  login: PropTypes.func,
  authorizationStatus: PropTypes.string,
  genre: PropTypes.string.isRequired,
  releaseData: PropTypes.number.isRequired,
  films: PropTypes.array,
  onButtonHendler: PropTypes.func,
  filmList: PropTypes.array,
};
export { App };
export default connect(mapStateToProps, mapDispatchToProps)(App);

