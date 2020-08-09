import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Player from '../player/player.jsx';
import {connect} from 'react-redux';
import {getActiveFilm} from '../../reducer/actions/selectors.js';
import {ActionCreator} from '../../reducer/actions/actions.js';
import {Link} from 'react-router-dom';
import {RouteConst} from '../../utils.js';

class Film extends PureComponent {
  constructor(props) {
    super(props);

    this.timer = null;
    this.state = {
      isPlaying: false,
    };
    this.handlerMouseEnter = this.handlerMouseEnter.bind(this);
    this.handlerMouseLeave = this.handlerMouseLeave.bind(this);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
  handlerMouseEnter() {
    this.timer = setTimeout(() => {
      this.setState({
        isPlaying: true
      });
    }, 1000);

  }

  handlerMouseLeave() {
    clearTimeout(this.timer);
    this.setState({
      isPlaying: false
    });

  }
  render() {
    const {film, onCardClickHendler, selectActiveFilm} = this.props;
    const {isPlaying} = this.state;
    return <article className="small-movie-card catalog__movies-card" id={film.id} onMouseEnter={this.handlerMouseEnter} onMouseLeave={this.handlerMouseLeave}
      onClick={(evt) => {
        const id = evt.currentTarget.id;
        selectActiveFilm(id);
        onCardClickHendler(evt);
      }}
    >
      <div className="small-movie-card__image">
        < Player previewVideoLink={film.previewVideoLink} posterImage={film.previewImage} isPlaying={isPlaying} />
      </div>
      <h3 className="small-movie-card__title">
        <Link
          onClick={(evt) => {
            const id = evt.currentTarget.id;
            selectActiveFilm(id);
          }} className="small-movie-card__link"
          to={`${RouteConst.MAIN}${RouteConst.FILM_DETAILS}/${film.id}`}>
          {film.name}
        </Link>
      </h3>
    </article>;
  }
}
Film.propTypes = {
  film: PropTypes.shape({
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
    previewVideoLink: PropTypes.string,
  }),
  onButtonHendler: PropTypes.func,
  selectActiveFilm: PropTypes.func,
  onHoverHeandler: PropTypes.func,
  onCardClickHendler: PropTypes.func,
  isPlaying: PropTypes.bool
};
const mapStateToProps = (state) => ({
  activeFilm: getActiveFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  selectActiveFilm: (id) => dispatch(ActionCreator.selectActiveFilm(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(Film);

