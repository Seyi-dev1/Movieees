import { createSlice } from "@reduxjs/toolkit";

export const addMovieToHistory = (historyItems, historyItemsToAdd) => {
  const movieAlreadyExists = historyItems.find((historyItem) => {
    return historyItem.id === historyItemsToAdd.id;
  });

  if (movieAlreadyExists) {
    return historyItems.map((historyItem) => {
      return historyItem.id === historyItemsToAdd.id
        ? { ...historyItem, quantity: historyItem.quantity + 1 }
        : historyItem;
    });
  } else {
    return [...historyItems, { ...historyItemsToAdd, quantity: 1 }];
  }
};

const historySlice = createSlice({
  name: "history",
  initialState: {
    history: [],
  },
  reducers: {
    addToHistory: (state, action) => {
      state.history = addMovieToHistory(state.history, action.payload);
    },

    removeFromHistory: (state, action) => {
      state.history = state.history.filter((historyItem) => {
        return historyItem.id !== action.payload;
      });
    },

    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export const { addToHistory, removeFromHistory, clearHistory } =
  historySlice.actions;

export default historySlice.reducer;
