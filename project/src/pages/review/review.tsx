import { ChangeEvent, MouseEvent, useState } from 'react';
import { generatePath, useNavigate, useParams } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendUserComment } from '../../store/api-actions';

export function Review():JSX.Element {
  const [formData, setFormData] = useState({
    comment: '',
    rating: 0
  });
  const {promo} = useAppSelector((state) => state);
  const authStatus = useAppSelector((state) => state.authStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { filmId } = useParams<string>();

  if (authStatus !== AuthorizationStatus.Auth) {
    navigate(generatePath(AppRoute.Movie, {filmId: filmId}));
  }

  const handleOnChangeField = (evt: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    dispatch(sendUserComment({ filmId, ...formData }));
    setFormData({ comment: '', rating: 0 });
    navigate(generatePath(AppRoute.Movie, {filmId: filmId}));
  };

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={promo.backgroundImage} alt={promo.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__poster film-card__poster--small">
          <img src={promo.posterImage} alt={`${promo.name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              <input onChange={handleOnChangeField} className="rating__input" id="star-10" type="radio" name="rating" value="10" />
              <label className="rating__label" htmlFor="star-10">Rating 10</label>

              <input onChange={handleOnChangeField} className="rating__input" id="star-9" type="radio" name="rating" value="9" />
              <label className="rating__label" htmlFor="star-9">Rating 9</label>

              <input onChange={handleOnChangeField} className="rating__input" id="star-8" type="radio" name="rating" value="8" />
              <label className="rating__label" htmlFor="star-8">Rating 8</label>

              <input onChange={handleOnChangeField} className="rating__input" id="star-7" type="radio" name="rating" value="7" />
              <label className="rating__label" htmlFor="star-7">Rating 7</label>

              <input onChange={handleOnChangeField} className="rating__input" id="star-6" type="radio" name="rating" value="6" />
              <label className="rating__label" htmlFor="star-6">Rating 6</label>

              <input onChange={handleOnChangeField} className="rating__input" id="star-5" type="radio" name="rating" value="5" />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>

              <input onChange={handleOnChangeField} className="rating__input" id="star-4" type="radio" name="rating" value="4" />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input onChange={handleOnChangeField} className="rating__input" id="star-3" type="radio" name="rating" value="3" />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input onChange={handleOnChangeField} className="rating__input" id="star-2" type="radio" name="rating" value="2" />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input onChange={handleOnChangeField} className="rating__input" id="star-1" type="radio" name="rating" value="1" />
              <label className="rating__label" htmlFor="star-1">Rating 1</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              onChange={handleOnChangeField}
              className="add-review__textarea"
              name="comment"
              id="review-text"
              placeholder="Review text"
            >
            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" onClick={handleOnSubmit}>Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
}
