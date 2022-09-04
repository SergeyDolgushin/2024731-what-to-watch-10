import { MouseEvent, MouseEventHandler } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFilter } from '../../store/actions';

const makeFilterName: {[key: string]: string} = {
  'All genres': 'All',
  'Comedies': 'Comedy',
  'Crime': 'Crime',
  'Documentary': 'Documentary',
  'Dramas': 'Drama',
  'Horror': 'Horror',
  'Kids & Family': 'Family',
  'Romance': 'Romance',
  'Sci-Fi': 'Sci-Fi',
  'Thrillers': 'Thriller',
};

const makeFiltersList = (currentFilter: string, handlerFilterChange: MouseEventHandler<HTMLParagraphElement>) => (
  Object.keys(makeFilterName).map((item) => (
    <li
      className={
        currentFilter === makeFilterName[item]
          ? 'catalog__genres-item catalog__genres-item--active'
          : 'catalog__genres-item'
      }
      key={item}
    >
      <p className="catalog__genres-link" onClick={handlerFilterChange}>{item}</p>
    </li>
  ))
);


export function GenresSortMenu(): JSX.Element {
  const currentFilter = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const handlerFilterChange = (evt: MouseEvent<HTMLParagraphElement>) => {
    const newFilter = evt.currentTarget.innerText;
    if (newFilter !== currentFilter) {
      dispatch(changeFilter(makeFilterName[newFilter]));
    }
  };

  return (
    <ul className="catalog__genres-list">
      {makeFiltersList(currentFilter, handlerFilterChange)}
    </ul>
  );
}
