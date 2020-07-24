import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Film from '../film/film.jsx';
import {connect} from 'react-redux';
import {getFilms} from '../../reducer/data/selectors.js';
import {getGenreActive, getFilmsCount, getFilteredList} from '../../reducer/actions/selectors.js';

class FilmList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilm: 0,
    };
    this.hoverHeandler = this.hoverHeandler.bind(this);
  }

  render() {
    const {filteredList, filmList, genreActive, filmsCount} = this.props;
    const {isDetails, currentFilm, onButtonHendler, onCardClickHendler} = this.props;
    let renderedFilms = [];

    if (genreActive === `All genres`) {
      renderedFilms = filmList.slice(0, filmsCount);
    } else {
      renderedFilms = filteredList.slice(0, filmsCount);
    }

    if (isDetails) {
      const likelyFilms = filmList.filter((elem) => elem.genre === currentFilm.genre);
      return <div className="catalog__movies-list">
        {likelyFilms.map((film) => <Film key={film.id} film={film} onButtonHendler={onButtonHendler} onHoverHeandler={this.hoverHeandler} onCardClickHendler={onCardClickHendler} />)}
      </div>;
    }
    return <div className="catalog__movies-list">
      {renderedFilms.map((film) => <Film key={film.id} film={film} onButtonHendler={onButtonHendler} onHoverHeandler={this.hoverHeandler} onCardClickHendler={onCardClickHendler} />)}
    </div>;
  }

  hoverHeandler(evt) {
    const id = evt.currentTarget.id;
    this.setState({activeFilm: id});
  }

}

FilmList.propTypes = {
  filmList: PropTypes.array,
  filteredList: PropTypes.array,
  onButtonHendler: PropTypes.func,
  onCardClickHendler: PropTypes.func,
  isDetails: PropTypes.bool,
  currentFilm: PropTypes.object,
  genreActive: PropTypes.string,
  filmsCount: PropTypes.number,
};

const mapStateToProps = (state) => ({
  filteredList: getFilteredList(state),
  filmList: getFilms(state),
  genreActive: getGenreActive(state),
  filmsCount: getFilmsCount(state),
});

export {FilmList};
export default connect(mapStateToProps)(FilmList);
