export enum AppRoute {
  Login = '/login',
  MyList = '/mylist',
  Movie = '/films/:filmId',
  Root = '/',
  // Player = '/player/:id',
  // AddReview = '/films/:id/review',
  // PageNotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
  // Movie = '/films/:filmId',
  // Root = '/',
  // // Player = '/player/:id',
  // AddReview = '/films/:id/review',
  // PageNotFound = '*',
}

export enum Filter {
  All = 'All',
  Comedies = 'Comedie',
  Crime = 'Crime',
  Documentary='Documentary',
  Dramas = 'Drama',
  Horror = 'Horror',
  Kids = 'Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thrillers = 'Thriller',
}

