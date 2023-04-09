import { createSelector } from "reselect";

const selectModal = (state) => state.modal;

export const selectModalState = createSelector(
  [selectModal],
  (modal) => modal.isModal
);
