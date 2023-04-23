import { all, call } from "redux-saga/effects";
import { userSagas } from "./userSagas";
import { moviesSagas } from "./moviesSaga";
import { wishlistSaga } from "./wishlistSaga";
import { historySaga } from "./historySaga";
export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(moviesSagas),
    call(wishlistSaga),
    call(historySaga),
  ]);
}
