import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/actions/actions.js';
import {getFilms} from '../../reducer/data/selectors.js';
import {getGenreActive, getFilmsCount} from '../../reducer/actions/selectors.js';
class ShowMoreButton extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {addFilms, filmsCount, genreActive, filteredList, filmList} = this.props;
    if ((genreActive === `All genres` && filmsCount < filmList.length) || (genreActive !== `All genres` && filmsCount < filteredList.length)) {
      return <button onClick={() => {
        addFilms();
      }} className="catalog__button" type="button">Show more</button>;
    }
    return <React.Fragment></React.Fragment>;
  }
}
ShowMoreButton.propTypes = {
  addFilms: PropTypes.func,
  filmsCount: PropTypes.number,
  genreActive: PropTypes.string,
  filteredList: PropTypes.array,
  filmList: PropTypes.array,
};
const mapStateToProps = (state) => ({
  filmsCount: getFilmsCount(state),
  genreActive: getGenreActive(state),
  filteredList: getFilms(state),
  filmList: getFilms(state),
});
const mapDispatchToProps = (dispatch) => ({
  addFilms: () => dispatch(ActionCreator.addFilms())
});
export {ShowMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
