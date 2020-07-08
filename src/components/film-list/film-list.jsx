import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Film from '../film/film.jsx';
class FilmList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilm: 0,
    };
    this.hoverHeandler = this.hoverHeandler.bind(this);
  }

  render() {
    const {isDetails, currentFilm, films, onButtonHendler, onCardClickHendler} = this.props;
    if (isDetails) {
      const likelyFilms = films.slice().filter((elem) => elem.genre === currentFilm.genre);
      return <div className="catalog__movies-list">
        {likelyFilms.map((film) => <Film key={film.name} film={film} onButtonHendler={onButtonHendler} onHoverHeandler={this.hoverHeandler} onCardClickHendler={onCardClickHendler} />)}
      </div>;
    }
    return <div className="catalog__movies-list">
      {films.map((film) => <Film key={film.name} film={film} onButtonHendler={onButtonHendler} onHoverHeandler={this.hoverHeandler} onCardClickHendler={onCardClickHendler} />)}
    </div>;
  }

  hoverHeandler(evt) {
    const id = evt.currentTarget.id;
    this.setState({activeFilm: id});
  }

}

FilmList.propTypes = {
  films: PropTypes.array,
  onButtonHendler: PropTypes.func,
  onCardClickHendler: PropTypes.func,
  isDetails: PropTypes.bool,
  currentFilm: PropTypes.object,
};
export default FilmList;
