import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: [],
    topRatedMovies: [],
    inCinemas: [],
    nowPlaying: [],
    isFetching: false,
    error: null,
  },

  reducers: {
    fetchMoviesStart: (state, action) => {
      state.isFetching = true;
    },
    fetchPopularMoviesSuccess: (state, action) => {
      state.isFetching = false;
      state.popularMovies = action.payload;
    },
    fetchTopRatedMoviesSuccess: (state, action) => {
      state.isFetching = false;
      state.topRatedMovies = action.payload;
    },
    fetchInCinemasMoviesSuccess: (state, action) => {
      state.isFetching = false;
      state.inCinemas = action.payload;
    },
    fetchNowPlayingMoviesSuccess: (state, action) => {
      state.isFetching = false;
      state.nowPlaying = action.payload;
    },
    fetchMoviesFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  fetchMoviesFailure,
  fetchInCinemasMoviesSuccess,
  fetchTopRatedMoviesSuccess,
  fetchMoviesStart,
  fetchPopularMoviesSuccess,
  fetchNowPlayingMoviesSuccess,
} = moviesSlice.actions;

export default moviesSlice.reducer;
