import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { Header } from '../header/header';

export function Promo() {
  const {promo, films} = useAppSelector((state) => state);
  const favoritesCount = films.filter((item) => item.isFavorite).length;

  return (
    <section className="film-card" style={{backgroundColor: promo.backgroundColor}}>
      <div className="film-card__bg">
        <img src={promo.backgroundImage} alt={promo.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>
      <Header/>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promo.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promo.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promo.genre}</span>
              <span className="film-card__year">{promo.released}</span>
            </p>

            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use href="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <Link to={AppRoute.MyList}>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use href="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{favoritesCount}</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}