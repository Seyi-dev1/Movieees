import { all, call, put, takeLatest } from "redux-saga/effects";
import { clearHistory } from "../redux/history/historyReducer";

export function* cleaHistoryOnSignOut() {
  yield put(clearHistory());
}

export function* onSignOutSuccess() {
  yield takeLatest("user/signOutSuccess", cleaHistoryOnSignOut);
}

export function* historySaga() {
  yield all([call(onSignOutSuccess)]);
}
