import { useState } from 'react';
import { FilmsList } from '../../components/films-list/films-list';
import { Footer } from '../../components/footer/footer';
import { GenresSortMenu } from '../../components/genres-sort-menu/genres-sort-menu';
import { Promo } from '../../components/promo/promo';
import { useAppSelector } from '../../hooks';
import { useFilter } from '../../hooks/useFilter';

const initialFilmCount = 8;

export function MainPage(): JSX.Element | null{
  const {isLoading, films} = useAppSelector((state) => state);
  const [filmsCount, setFilmsCount] = useState(initialFilmCount);
  const isHidden = filmsCount >= films.length ? 'catalog__button visually-hidden' : 'catalog__button';

  const filteredFilm = useFilter(films);

  const handleOnClickShowMoreButton = () => {
    const newCount = filmsCount + initialFilmCount;
    setFilmsCount(newCount);
  };

  return (
    !isLoading ?
      <>
        <Promo/>
        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <GenresSortMenu/>
            {FilmsList(filmsCount, filteredFilm)}
            <div className="catalog__more">
              <button
                className={isHidden}
                type="button"
                onClick={handleOnClickShowMoreButton}
              >
                  Show more
              </button>
            </div>
          </section>
          <Footer/>
        </div>
      </> : null
  );
}
