import { createAsyncThunk } from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import { APIRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AppDispatch } from '../types/state';
import { AuthData, Film, State, UserComment, UserData, Comment } from '../types/types';
import { authorize, getPromo, loadComments, requireAuthorization, setLoaded } from './actions';

export const fetchPromoAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'main/getPromo',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setLoaded({isLoading: true}));
    const { data } = await api.get<Film>(APIRoute.Promo);
    dispatch(getPromo(data));
    dispatch(setLoaded({isLoading: false}));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    dispatch(authorize(AuthorizationStatus.Auth));
    saveToken(data.token, data.email, data.avatarUrl, String(data.id));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dispatch(authorize(AuthorizationStatus.NoAuth));
    dropToken();
  },
);

export const sendUserComment = createAsyncThunk<void, UserComment, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'send/comment',
  async ({ comment, rating, filmId }, { dispatch, extra: api }) => {
    const {data} = await api.post<Comment[]>(`${APIRoute.AddReview}${filmId}`, { comment, rating });
    dispatch(loadComments(data));
  },
);

export const getComments = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'main/getComments',
  async (filmId, { dispatch, extra: api }) => {
    const {data} = await api.get<Comment[]>(`${APIRoute.AddReview}${filmId}`);
    dispatch(loadComments(data));
  },
);
