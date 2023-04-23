import { all, call, put, takeLatest } from "redux-saga/effects";
import { clearWatchlist } from "../redux/wishlist/wishlistReducer";

export function* clearWatchlistOnSignOut() {
  yield put(clearWatchlist());
}

export function* onSignOutSuccess() {
  yield takeLatest("user/signOutSuccess", clearWatchlistOnSignOut);
}

export function* wishlistSaga() {
  yield all([call(onSignOutSuccess)]);
}
