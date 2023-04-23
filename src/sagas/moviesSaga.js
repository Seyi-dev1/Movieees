import { takeLatest, put, call, all } from "redux-saga/effects";

import {
  fetchPopularMoviesSuccess,
  fetchMoviesFailure,
  fetchTopRatedMoviesSuccess,
  fetchInCinemasMoviesSuccess,
  fetchNowPlayingMoviesSuccess,
} from "../redux/moviesdata/moviesdataReducer";

export function* fetchMovies() {
  try {
    const popularMovies = yield call(() =>
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`,
      ).then((response) => response.json()),
    );
    const topRatedMovies = yield call(() =>
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`,
      ).then((response) => response.json()),
    );
    const inCinemasMovies = yield call(() =>
      fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`,
      ).then((response) => response.json()),
    );
    const nowPlayingMovies = yield call(() =>
      fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`,
      ).then((response) => response.json()),
    );
    yield put(fetchPopularMoviesSuccess(popularMovies.results));
    yield put(fetchTopRatedMoviesSuccess(topRatedMovies.results));
    yield put(fetchInCinemasMoviesSuccess(inCinemasMovies.results));
    yield put(fetchNowPlayingMoviesSuccess(nowPlayingMovies.results));
  } catch (error) {
    yield put(fetchMoviesFailure(error));
  }
}

export function* onFetchMoviesStart() {
  yield takeLatest("movies/fetchMoviesStart", fetchMovies);
}

export function* moviesSagas() {
  yield all([call(onFetchMoviesStart)]);
}
