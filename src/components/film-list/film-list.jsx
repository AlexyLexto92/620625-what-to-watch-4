import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Film from '../film/film.jsx';
import {connect} from 'react-redux';

class FilmList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilm: 0,
    };
    this.hoverHeandler = this.hoverHeandler.bind(this);
  }

  render() {
    const {filteredList, filmList, genreActive} = this.props;
    const {isDetails, currentFilm, onButtonHendler, onCardClickHendler} = this.props;
    let renderedFilms = [];
    if (genreActive === `All genres`) {
      renderedFilms = filmList;
    } else {
      renderedFilms = filteredList;
    }
    if (isDetails) {
      const likelyFilms = filmList.filter((elem) => elem.genre === currentFilm.genre);
      return <div className="catalog__movies-list">
        {likelyFilms.map((film) => <Film key={film.name} film={film} onButtonHendler={onButtonHendler} onHoverHeandler={this.hoverHeandler} onCardClickHendler={onCardClickHendler} />)}
      </div>;
    }
    return <div className="catalog__movies-list">
      {renderedFilms.map((film) => <Film key={film.name} film={film} onButtonHendler={onButtonHendler} onHoverHeandler={this.hoverHeandler} onCardClickHendler={onCardClickHendler} />)}
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
};

const mapStateToProps = (state) => ({
  filteredList: state.filteredList,
  filmList: state.filmList,
  genreActive: state.genreActive,
});

export {FilmList};
export default connect(mapStateToProps)(FilmList);
