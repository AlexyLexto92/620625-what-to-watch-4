import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import FilmList from '../film-list/film-list.jsx';
import FilmDetails from '../film-details/film-details.jsx';
import GanresList from '../ganres-list/ganres-list.jsx';
class Main extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {onCardClickHendler, films, onButtonHendler, activeFilmId, currentFilm} = this.props;
    const isDetails = false;
    if (activeFilmId > 0) {
      return < FilmDetails isDetails={isDetails} currentFilm={currentFilm} films={films} onButtonHendler={onButtonHendler} onCardClickHendler={onCardClickHendler} />;
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
              <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
            </div>
          </div>
        </header>


      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          < GanresList />
          <FilmList isDetails={isDetails} films={films} onButtonHendler={onButtonHendler} onCardClickHendler={onCardClickHendler} />
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
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
    </div>;
  }
}
Main.propTypes = {
  genre: PropTypes.string.isRequired,
  releaseData: PropTypes.number.isRequired,
  films: PropTypes.array,
  onButtonHendler: PropTypes.func,
  onCardClickHendler: PropTypes.func,
  activeFilmId: PropTypes.number,
  currentFilm: PropTypes.object
};
export default Main;
