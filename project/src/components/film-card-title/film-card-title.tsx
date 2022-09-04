import { generatePath, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Header } from '../header/header';
import { MyListButton } from '../my-list-button/my-list-button';

type FilmCardTitleProps = {
  backgroundImage: string;
  name: string;
  genre: string;
  released: number;
  id: number;
}

export function FilmCardTitle({backgroundImage, name, genre, released, id}: FilmCardTitleProps) {
  const navigate = useNavigate();

  const handleSelectReview = () => {
    navigate(generatePath( AppRoute.AddReview, {filmId: String(id)}) );
  };

  return (
    <div className="film-card__hero">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>
      <Header/>
      <div className="film-card__wrap">
        <div className="film-card__desc">
          <h2 className="film-card__title">{name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{genre}</span>
            <span className="film-card__year">{released}</span>
          </p>

          <div className="film-card__buttons">
            <button className="btn btn--play film-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <MyListButton/>
            {/* href="add-review.html"  */}
            <button className="btn film-card__button" onClick={handleSelectReview} type="button">Add review</button>
          </div>
        </div>
      </div>
    </div>
  );
}
