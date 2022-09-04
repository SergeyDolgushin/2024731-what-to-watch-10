import { createAction } from '@reduxjs/toolkit';
import { comment, Film } from '../types/types';

export const getPromo = createAction<Film>('main/getPromo');
export const getFilms = createAction<Film[]>('main/getFilms');
export const getSelectedFilm = createAction<Film>('main/getFilm');
export const setLoaded = createAction<{ isLoading: boolean }>('main/setLoaded');
export const loadComments = createAction<comment[]>('main/getComments');
export const requireAuthorization = createAction<string>('user/checkAuthStatus');
export const authorize = createAction<string>('user/Login');
export const logout = createAction<string>('user/Logout');
export const changeFilter = createAction<string>('app/changeFilter');
