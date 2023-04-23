import { createSelector } from "@reduxjs/toolkit";
const selectIsFetching = (state) => state.movies;
const selectPopular = (state) => state.movies;
const selectTopRated = (state) => state.movies;
const selectInCinema = (state) => state.movies;
const selectIsError = (state) => state.movies;
const selectNowPlaying = (state) => state.movies;
export const selectFetching = createSelector(
  [selectIsFetching],
  (movies) => movies.isFetching,
);

export const selectPopularMovies = createSelector(
  [selectPopular],
  (movies) => movies.popularMovies,
);
export const selectNowPlayingMovies = createSelector(
  [selectNowPlaying],
  (movies) => movies.nowPlaying,
);
export const selectTopRatedMovies = createSelector(
  [selectTopRated],
  (movies) => movies.topRatedMovies,
);
export const selectOutInCinemaMovies = createSelector(
  [selectInCinema],
  (movies) => movies.inCinemas,
);
export const selectError = createSelector(
  [selectIsError],
  (movies) => movies.error,
);
