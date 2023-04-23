import { createSelector } from "@reduxjs/toolkit";

const selectHistory = (state) => state.history;

export const selectHistoryItems = createSelector(
  [selectHistory],
  (history) => history.history,
);

export const historyItemsCount = createSelector(
  [selectHistory],
  (historyItems) =>
    historyItems
      .map((historyItem) => {
        return historyItem.quantity;
      })
      .reduce((index, value) => {
        return index + value;
      }, 0),
);
