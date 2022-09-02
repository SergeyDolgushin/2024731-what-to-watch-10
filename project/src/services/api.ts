import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import { getToken } from './token';

const BACKENDURL = 'https://10.react.pages.academy/wtw';
const TIMEOUT = 1000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKENDURL,
    timeout: TIMEOUT,
  });

  api.interceptors.request.use (
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  return api;
};

