export type Film = {
  id: number
  name: string
  posterImage: string
  previewImage: string
  backgroundImage: string
  backgroundColor: string
  videoLink: string
  previewVideoLink: string
  description: string
  rating: number
  scoresCount: number
  director: string
  starring: [string]
  runTime: number
  genre: string
  released: number
  isFavorite: boolean
}

export type State = {
  authStatus: string;
  isLoading: boolean;
  name: string;
  films: Film[] | [];
  selectedFilm: Film;
  comments: comment[] | [];
  promo: Film;
}

export type comment = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
    id: number
    name: string
  }
}

export type AuthData = {
  email: string;
  password: string;
}

export type UserData = {
  token: string;
  email: string;
  avatarUrl: string;
  id: number;
}
