import { useEffect, useState } from 'react';

import type { Film } from '../types/types';
import { useAppSelector } from '.';
import { Filter } from '../const';


export function useFilter(films:Film[]) {
  const [currentFilms, setFilms] = useState([...films]);
  const filter = useAppSelector((state) => state.filter);

  useEffect(() => {
    setFilms([...films]);
  }, [films]);

  useEffect(() => {
    if (filter !== Filter.All) {
      const filteredFilms = films.filter((film) => film.genre === filter);
      setFilms([...filteredFilms]);
    } else {
      setFilms([...films]);
    }
  }, [filter, films]);

  return currentFilms;
}
