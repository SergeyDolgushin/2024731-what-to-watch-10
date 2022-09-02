import { Film } from '../../types/types';
import { FilmCard } from '../film-card/film-card';

const makeCardsList = (maxCount: number, array: Film[]) => {
  const slicedArray = array.slice(0, maxCount);

  return slicedArray.map((item) => (
    <FilmCard
      previewImage={item.previewImage}
      name={item.name}
      key={item.id}
      id={item.id}
      movie={item.previewVideoLink}
    />
  ));

};

export function FilmsList (maxCount: number, films: Film[]): JSX.Element | null {

  return (
    <div className="catalog__films-list">
      {makeCardsList(maxCount, films)}
    </div>
  );
}
