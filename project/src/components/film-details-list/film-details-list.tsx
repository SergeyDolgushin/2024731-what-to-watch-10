import { Fragment } from 'react';

type FilmDetailsProps = {
  starring: [string];
}

const makeStarringList = (array: [string]) => array.map((item) => <Fragment key={item}>{item}, <br/></Fragment>);

export function FilmDetailsList({starring}: FilmDetailsProps): JSX.Element {

  return (
    <p className="film-card__details-item">
      <strong className="film-card__details-name">Starring</strong>
      <span className="film-card__details-value">
        {makeStarringList(starring)}
      </span>
    </p>
  );
}
