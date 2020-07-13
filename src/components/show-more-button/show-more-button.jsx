import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';
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
  filmsCount: state.filmsCount,
  genreActive: state.genreActive,
  filteredList: state.filteredList,
  filmList: state.filmList,
});
const mapDispatchToProps = (dispatch) => ({
  addFilms: () => dispatch(ActionCreator.addFilms())
});
export {ShowMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
