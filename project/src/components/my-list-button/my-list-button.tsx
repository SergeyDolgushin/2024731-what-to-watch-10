import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';

export function MyListButton() {
  const {films} = useAppSelector((state) => state);
  const favoritesCount = films.filter((item) => item.isFavorite).length;
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(AppRoute.MyList);
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleOnClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use href="#add"></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{favoritesCount}</span>
    </button>
  );
}
