import { all, call } from "redux-saga/effects";
import { userSagas } from "./userSagas";
import { moviesSagas } from "./moviesSaga";
export default function* rootSaga() {
  yield all([call(userSagas), call(moviesSagas)]);
}
