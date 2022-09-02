import { createReducer } from '@reduxjs/toolkit';
import { getPromo, getFilms, setLoaded, getSelectedFilm, loadComments, requireAuthorization, authorize, logout } from './actions';
import { initialState } from './initial-state';


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(getFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setLoaded, (state, action) => {
      state.isLoading = action.payload.isLoading;
    })
    .addCase(getSelectedFilm, (state, action) => {
      state.selectedFilm = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(authorize, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(logout, (state, action) => {
      state.authStatus = action.payload;
    });
});

export { reducer };
