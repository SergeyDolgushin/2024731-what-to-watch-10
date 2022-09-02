import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUserInfo } from '../../services/token';
import { logoutAction } from '../../store/api-actions';


const getCurrentHeader = (status: string, handleLogout: MouseEventHandler<HTMLParagraphElement>) => {
  const authorizationStatus = status;
  const {userImg} = getUserInfo();


  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src={userImg} alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <p className="user-block__link" onClick={handleLogout}>Sign out</p>
        </li>
      </ul>
    );
  }

  return (
    <div className="user-block">
      <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>
    </div>
  );
};


export function Header(): JSX.Element {
  const {authStatus} = useAppSelector((state) => state);
  const headerClassName = (authStatus === AuthorizationStatus.Auth) ?
    'page-header film-card__head' : 'page-header';

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <header className={headerClassName}>
      <div className="logo">
        <Link to={AppRoute.Root} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {getCurrentHeader(authStatus, handleLogout)}
    </header>
  );
}
