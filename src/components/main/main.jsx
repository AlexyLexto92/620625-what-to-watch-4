import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FilmList from '../film-list/film-list.jsx';
import FilmDetails from '../film-details/film-details.jsx';
import GanresList from '../ganres-list/ganres-list.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import { Switch, Router, Route, Link } from 'react-router-dom';
import history from '../../history.js';
import { RouteConst } from '../../utils.js';
import { connect } from 'react-redux';
import { getActiveFilm } from '../../reducer/actions/selectors.js';
import { getAuthorizationStatus } from '../../reducer/user/selectors.js';
import ProfileIcon from '../profile-icon/profile-icon.jsx';
class Main extends PureComponent {
  constructor(props) {
    super(props);
  }
  _getScreen() {
    const { onCardClickHendler, films, onButtonHendler, activeFilmId, handlerButtonClick, activeFilm } = this.props;
    const isDetails = false;
    if (activeFilmId > 0) {
      return history.push(`${RouteConst.MAIN}${RouteConst.FILM_DETAILS}/:${activeFilm}`);
    }
    return <div>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="user-block">
            <div className="user-block__avatar">
              <ProfileIcon />

            </div>
          </div>
        </header>
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width={218} height={327} />
            </div>
            <div className="movie-card__desc">
              <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">Drama</span>
                <span className="movie-card__year">2014</span>
              </p>
              <div className="movie-card__buttons" onClick={handlerButtonClick}>
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>


      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          < GanresList />
          <FilmList isDetails={isDetails} films={films} onButtonHendler={onButtonHendler} onCardClickHendler={onCardClickHendler} />
          <div className="catalog__more">
            <ShowMoreButton />
          </div>
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div >;
  }
  render() {
    const { onCardClickHendler, films, onButtonHendler, currentFilm, isShowFullPlayer, handlerButtonClick, activeFilm, handlerButtonCloseClick } = this.props;
    const isDetails = false;
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={RouteConst.MAIN}>
            {this._getScreen()}
          </Route>
          <Route exact path={`${RouteConst.MAIN}${RouteConst.FILM_DETAILS}/:${activeFilm.id}?`}>
            < FilmDetails
              isDetails={isDetails}
              currentFilm={currentFilm}
              films={films}
              onButtonHendler={onButtonHendler}
              onCardClickHendler={onCardClickHendler}
              handlerButtonClick={handlerButtonClick}
              isShowFullPlayer={isShowFullPlayer}
              handlerButtonCloseClick={handlerButtonCloseClick} />;
          </Route>
        </Switch>
      </Router>
    );
  }
}

Main.propTypes = {
  activeFilm: PropTypes.number,
  genre: PropTypes.string.isRequired,
  releaseData: PropTypes.number.isRequired,
  films: PropTypes.array,
  onButtonHendler: PropTypes.func,
  onCardClickHendler: PropTypes.func,
  activeFilmId: PropTypes.number,
  currentFilm: PropTypes.object,
  filmList: PropTypes.array,
  filteredList: PropTypes.array,
  isShowFullPlayer: PropTypes.bool,
  handlerButtonClick: PropTypes.func,
  handlerButtonCloseClick: PropTypes.func,
};
const mapStateToProps = (state) => ({
  activeFilm: getActiveFilm(state),
  authorizationStatus: getAuthorizationStatus(state),
});

export { Main };
export default connect(mapStateToProps)(Main);


