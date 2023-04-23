import { createSelector } from "@reduxjs/toolkit";

const selectWatchlist = (state) => state.watchlist;

export const selectWatchlistItems = createSelector(
  [selectWatchlist],
  (watchlist) => watchlist.watchlist,
);

export const watchlistItemsCount = createSelector(
  [selectWatchlist],
  (watchlistItems) =>
    watchlistItems
      .map((watchlistItem) => {
        return watchlistItem.quantity;
      })
      .reduce((index, value) => {
        return index + value;
      }, 0),
);
