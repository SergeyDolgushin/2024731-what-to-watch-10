import { AuthorizationStatus } from '../const';
import { State } from '../types/types';


export const initialState: State = {
  authStatus: AuthorizationStatus.Unknown,
  isLoading: true,
  name: 'Paris',
  films: [],
  comments: [],
  selectedFilm: {
    id: 0,
    name: '',
    posterImage: '',
    previewImage: '',
    backgroundColor: '',
    backgroundImage: '',
    videoLink: '',
    previewVideoLink: '',
    description: '',
    rating: 0,
    released: 0,
    runTime: 0,
    scoresCount: 0,
    starring: [''],
    director: '',
    genre: '',
    isFavorite: false,
  },
  promo: {
    id: 0,
    name: '',
    posterImage: '',
    previewImage: '',
    backgroundColor: '',
    backgroundImage: '',
    videoLink: '',
    previewVideoLink: '',
    description: '',
    rating: 0,
    released: 0,
    runTime: 0,
    scoresCount: 0,
    starring: [''],
    director: '',
    genre: '',
    isFavorite: false,
  }
};
