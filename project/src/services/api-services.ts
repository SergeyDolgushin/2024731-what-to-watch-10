import { useAppDispatch } from '../hooks';
import { useHttp } from '../hooks/http.hook';
import { setLoaded } from '../store/actions';

export const useApiService = () => {
  const { loading, request, error, clearError } = useHttp();
  const dispatch = useAppDispatch();

  const _apiBase = 'https://10.react.pages.academy/wtw/';

  const getAllFilms = async () => {
    dispatch(setLoaded({isLoading: true}));
    const res = await request(`${_apiBase}films`);
    return res;
  };

  const getFilm = async (idFilm: string) => {
    dispatch(setLoaded({isLoading: true}));
    const res = await request(`${_apiBase}films/${idFilm}`);
    return res;
  };

  return { loading, error, getAllFilms, clearError, getFilm };
};
