import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Player from '../player/player.jsx';
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
    const {film, onButtonHendler, onCardClickHendler} = this.props;
    const {isPlaying} = this.state;
    return <article className="small-movie-card catalog__movies-card" id={film.id} onMouseEnter={this.handlerMouseEnter} onClick={onCardClickHendler} onMouseLeave={this.handlerMouseLeave}>
      <div className="small-movie-card__image">
        < Player previewVideoLink={film.previewVideoLink} posterImage={film.previewImage} isPlaying={isPlaying} />
      </div>
      <h3 className="small-movie-card__title">
        <a onClick={onButtonHendler} className="small-movie-card__link" href="movie-page.html">{film.name}</a>
      </h3>
    </article>;
  }
}
Film.propTypes = {
  film: PropTypes.shape({
    previewImage: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
    previewVideoLink: PropTypes.string,
  }),
  onButtonHendler: PropTypes.func,
  onHoverHeandler: PropTypes.func,
  onCardClickHendler: PropTypes.func
};
export default Film;

