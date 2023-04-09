import { createSelector } from "@reduxjs/toolkit";

const selectUser = (state) => state.user;
const selectIsSigningIn = (state) => state.user;
const selectIsError = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectIsLoading = createSelector(
  [selectIsSigningIn],
  (user) => user.isSigningIn
);

export const selectError = createSelector(
  [selectIsError],
  (user) => user.error
);
