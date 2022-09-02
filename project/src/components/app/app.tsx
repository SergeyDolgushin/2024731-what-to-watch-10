import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Login } from '../../pages/login/login';
import { MainPage } from '../../pages/main.tsx/main';
import { MoviePage } from '../../pages/movie-page/movie-page';
import { useApiService } from '../../services/api-services';
import { getFilms, setLoaded } from '../../store/actions';
import { MyList } from '../my-list/my-list';
import { PrivateRoute } from '../private-route/private-route';

export function App(): JSX.Element {
  const {authStatus} = useAppSelector((state) => state);
  const { getAllFilms } = useApiService();
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAllFilms().then((res) => {
      dispatch(getFilms(res));
      dispatch(setLoaded({isLoading: false}));
    });
  }, []);


  return (
    <Router>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />}/>
        <Route path={AppRoute.Movie} element={<MoviePage />}/>
        <Route path={AppRoute.Login} element={<Login />}/>
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={authStatus}
            >
              <MyList />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}


