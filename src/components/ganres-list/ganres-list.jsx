import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/actions/actions.js';
import PropTypes from 'prop-types';
import {getGenreActive, getGenres, getFilteredList} from '../../reducer/actions/selectors.js';
class GanresList extends PureComponent {
  constructor(props) {
    super(props);

  }
  render() {
    const { changeFilter, genreActive, genres, reloadFilmsCount} = this.props;
    return <ul className="catalog__genres-list">
      {
        genres.map((genre) => <li key={genre} className={genre === genreActive ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}><a href="#" onClick={() => {
          changeFilter(genre);
          reloadFilmsCount();
        }} className="catalog__genres-link">{genre}</a></li>)}
    </ul>;
  }

}
GanresList.propTypes = {
  changeFilter: PropTypes.func,
  genreActive: PropTypes.string,
  filterFilms: PropTypes.func,
  reloadFilmsCount: PropTypes.func,
  genres: PropTypes.array,
};

const mapStateToProps = (state) => ({
  genreActive: getGenreActive(state),
  filteredList: getFilteredList(state),
  genres: getGenres(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (genre) => dispatch(ActionCreator.changeFilter(genre)),
  reloadFilmsCount: () => dispatch(ActionCreator.reloadFilmsCount()),
});

export {GanresList};
export default connect(mapStateToProps, mapDispatchToProps)(GanresList);
