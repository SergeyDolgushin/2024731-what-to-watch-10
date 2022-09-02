import { useAppSelector } from '../../hooks';
import { Film } from '../../types/types';
import { Header } from '../header/header';

const makeFavoriteList = (array: Film[]) => {
  const favoriteFilms = array.filter((item) => item.isFavorite === true);

  return (
    favoriteFilms.length ?
      favoriteFilms.map((item) => (
        <article className="small-film-card catalog__films-card" key={item.id}>
          <div className="small-film-card__image">
            <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <a className="small-film-card__link" href="film-page.html">{item.name}</a>
          </h3>
        </article>)) : null
  );
};

export function MyList() {
  const {films} = useAppSelector((state) => state);


  return (
    <div className="user-page">
      <Header/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {makeFavoriteList(films)}
        </div>
      </section>
    </div>
  );
}
