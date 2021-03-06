import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Tabs from '../tabs/tabs.jsx';
import FilmList from '../film-list/film-list.jsx';
import FullPlayer from '../full-player/full-player.jsx';
import AddRewiew from '../add-rewiew/add-rewiew.jsx';
class FilmDetails extends PureComponent {
  constructor(props) {
    super(props);

  }
  render() {
    const {films, onButtonHendler, onCardClickHendler, currentFilm, handlerButtonClick, isShowFullPlayer, handlerButtonCloseClick} = this.props;
    const isDetails = true;
    if (isShowFullPlayer) {
      return <FullPlayer currentFilm={currentFilm} handlerButtonCloseClick={handlerButtonCloseClick}/>;
    }
    return <React.Fragment>
      <section className="movie-card movie-card--full" style={{background: currentFilm.backgroundColor}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>
            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
              </div>
            </div>
          </header>
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{currentFilm.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{currentFilm.genre}</span>
                <span className="movie-card__year">{currentFilm.released}</span>
              </p>
              <div className="movie-card__buttons">
                <button onClick={handlerButtonClick} className="btn btn--play movie-card__button" type="button">
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
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={currentFilm.posterImage} alt="The Grand Budapest Hotel poster" width={218} height={327} />
            </div>
            <div className="movie-card__desc">
              <Tabs currentFilm={currentFilm} />
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList isDetails={isDetails} currentFilm={currentFilm} films={films} onButtonHendler={onButtonHendler} onCardClickHendler={onCardClickHendler} />
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
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
      <AddRewiew />
    </React.Fragment>;
  }
}
export default FilmDetails;

FilmDetails.propTypes = {
  currentFilm: PropTypes.object,
  films: PropTypes.array,
  activeFilmId: PropTypes.number,
  onButtonHendler: PropTypes.func,
  onCardClickHendler: PropTypes.func,
  isShowFullPlayer: PropTypes.bool,
  handlerButtonClick: PropTypes.func,
  handlerButtonCloseClick: PropTypes.func,
};
