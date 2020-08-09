import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {getFilms} from '../../reducer/data/selectors.js';
import {connect} from "react-redux";
import {Operation as UserOperation} from '../../reducer/user/user.js';
import FullPlayer from "../full-player/full-player.jsx";
import SingIn from "../sing-in/sing-in.jsx";
import {Switch, Route, Router} from 'react-router-dom';
import history from "../../history.js";
import {RouteConst} from '../../utils.js';
import PrivateRoute from "../privat-router/privat-router.jsx";
import MyList from '../my-list/my-list.jsx';
import FilmDetails from "../film-details/film-details.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilmId: 0,

    };

    this.onCardClickHendler = this.onCardClickHendler.bind(this);
  }

  _renderScreen() {
    const {authorizationStatus} = this.props;
    const {genre, releaseData, filmList, onButtonHendler} = this.props;
    const activeFilmId = this.state.activeFilmId;
    const currentFilm = filmList[0];
    if (!filmList) {
      return null;
    }
    return (<Main genre={genre}
      releaseData={releaseData}
      currentFilm={currentFilm}
      activeFilmId={activeFilmId}
      films={filmList}
      onButtonHendler={onButtonHendler}
      onCardClickHendler={this.onCardClickHendler}
      prewiewFilm={filmList[0]} />);
  }

  render() {
    const {genre, releaseData, filmList, onButtonHendler, login, authorizationStatus} = this.props;
    const {activeFilmId} = this.state;
    const currentFilm = filmList[0];
    return (<Router history={history}>
      <Switch>
        <Route exact path={RouteConst.ROOT}>
          {this._renderScreen()}
        </Route>
        <Route exact path={RouteConst.MAIN}>
          <Main genre={genre}
            releaseData={releaseData}
            currentFilm={currentFilm}
            activeFilmId={activeFilmId}
            films={filmList}
            onButtonHendler={onButtonHendler}
            onCardClickHendler={this.onCardClickHendler}
            prewiewFilm={filmList[0]} />
        </Route>
        <Route path={`${RouteConst.FILM_DETAILS}'/:id'`} >
          < FilmDetails
            films={filmList}
            onButtonHendler={onButtonHendler}
            onCardClickHendler={this.onCardClickHendler} />
        </Route>
        <Route path={RouteConst.MY_LIST}
          render={(props) => {
            return <MyList props={props} />;
          }}
        >
        </Route>
        <Route exact path={RouteConst.SING_IN}>
          <SingIn onSubmit={login} />
        </Route>
        {/*         <PrivateRoute exact path={RouteConst.MY_LIST}
          render={(props) => {
            return <MyList props={props} />;
          }}
          authorizationStatus={authorizationStatus}>
        </PrivateRoute> */}
        <Route exact path={RouteConst.PLAYER} >
          <FullPlayer currentFilm={currentFilm} />
        </Route >
      </Switch >
    </Router >
    );
  }

  onCardClickHendler(evt) {
    const id = evt.currentTarget.id;
    this.setState({activeFilmId: Number(id)});
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
export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

