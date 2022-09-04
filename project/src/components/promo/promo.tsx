import { useAppSelector } from '../../hooks';
import { Header } from '../header/header';
import { MyListButton } from '../my-list-button/my-list-button';

export function Promo() {
  const {promo} = useAppSelector((state) => state);

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
              <MyListButton/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
