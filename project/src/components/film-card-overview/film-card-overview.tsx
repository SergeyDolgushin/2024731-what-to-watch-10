import { Film } from '../../types/types';

type FilmDetailsProps = {
  film: Film;
}

export function FilmCardOverview({film}: FilmDetailsProps) {

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">8,9</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {film.description}
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring">
          <strong>{film.starring.join(', ')} and other</strong>
        </p>
      </div>
    </>
  );
}
