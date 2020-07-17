import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';
import PropTypes from 'prop-types';
class GanresList extends PureComponent {
  constructor(props) {
    super(props);

  }
  render() {
    const {filterFilms, changeFilter, genreActive, genres, reloadFilmsCount} = this.props;
    return <ul className="catalog__genres-list">
      {
        genres.map((genre) => <li key={genre} className={genre === genreActive ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}><a href="#" onClick={() => {
          changeFilter(genre);
          filterFilms(genre);
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
  genreActive: state.genreActive,
  filteredList: state.filteredList,
  genres: state.genres,
});

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (genre) => dispatch(ActionCreator.changeFilter(genre)),
  filterFilms: (genre) => dispatch(ActionCreator.filterFilms(genre)),
  reloadFilmsCount: () => dispatch(ActionCreator.reloadFilmsCount()),
});

export {GanresList};
export default connect(mapStateToProps, mapDispatchToProps)(GanresList);
