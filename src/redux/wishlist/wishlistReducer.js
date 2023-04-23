import { createSlice } from "@reduxjs/toolkit";

export const addMovieToWatchlist = (watchlistItems, watchlistItemToAdd) => {
  const movieAlreadyExists = watchlistItems.find((watchlistItem) => {
    return watchlistItem.id === watchlistItemToAdd.id;
  });

  if (movieAlreadyExists) {
    return watchlistItems.map((watchlistItem) => {
      return watchlistItem.id === watchlistItemToAdd.id
        ? { ...watchlistItem, quantity: watchlistItem.quantity + 1 }
        : watchlistItem;
    });
  } else {
    return [...watchlistItems, { ...watchlistItemToAdd, quantity: 1 }];
  }
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: {
    watchlist: [],
  },
  reducers: {
    addMovie: (state, action) => {
      state.watchlist = addMovieToWatchlist(state.watchlist, action.payload);
    },

    removeMovie: (state, action) => {
      state.watchlist = state.watchlist.filter((watchlistItem) => {
        return watchlistItem.id !== action.payload;
      });
    },

    clearWatchlist: (state) => {
      state.watchlist = [];
    },
  },
});

export const { addMovie, removeMovie, clearWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;
