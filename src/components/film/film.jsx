import React from 'react';
import PropTypes from 'prop-types';
const Film = (props) => {
  const {film, onButtonHendler} = props;
  return <article className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image">
      <img src={film.img} alt={film.descr} width={280} height={175} />
    </div>
    <h3 className="small-movie-card__title">
      <a onClick={onButtonHendler} className="small-movie-card__link" href="movie-page.html">{film.title}</a>
    </h3>
  </article>;
};
Film.propTypes = {
  film: PropTypes.shape({
    img: PropTypes.string.isRequired,
    descr: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  onButtonHendler: PropTypes.func
};
export default Film;

