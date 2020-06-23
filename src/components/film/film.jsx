import React from 'react';
import PropTypes from 'prop-types';
const Film = (props) => {
  const {film, onButtonHendler, onHoverHeandler, onCardClickHendler} = props;
  return <article className="small-movie-card catalog__movies-card" id={film.id} onMouseEnter={onHoverHeandler} onMouseDown={onCardClickHendler}>
    <div className="small-movie-card__image">
      <img src={film.posterImage} alt={film.description} width={280} height={175} />
    </div>
    <h3 className="small-movie-card__title">
      <a onClick={onButtonHendler} className="small-movie-card__link" href="movie-page.html">{film.name}</a>
    </h3>
  </article>;
};
Film.propTypes = {
  film: PropTypes.shape({
    posterImage: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
  }),
  onButtonHendler: PropTypes.func,
  onHoverHeandler: PropTypes.func,
  onCardClickHendler: PropTypes.func
};
export default Film;

