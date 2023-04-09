import { takeLatest, put, call, all } from "redux-saga/effects";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
} from "../firebase/firebase.utils";
import { getDoc } from "firebase/firestore/lite";
import {
  SignInSuccess,
  SignInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
} from "../redux/user/userReducer";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData,
    );
    const userSnapshot = yield getDoc(userRef);
    yield put(
      SignInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      }),
    );
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

export function* signInwithEmail({ payload }) {
  try {
    const { user } = yield signInWithEmailAndPassword(
      auth,
      payload.email,
      payload.password,
    );
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

export function* signUp({ payload }) {
  const { email, password, username } = payload;
  try {
    const { user } = yield createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    yield put(signUpSuccess({ user, additionalData: { username } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signInAfterSignUp({ payload }) {
  const { user, additionalData } = payload;

  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

export function* signUserOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess(null));
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest("user/emailSignInStart", signInwithEmail);
}

export function* onSignUpStart() {
  yield takeLatest("user/signUpStart", signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest("user/signUpSuccess", signInAfterSignUp);
}

export function* onSignOutStart() {
  yield takeLatest("user/startSignOut", signUserOut);
}

export function* onCheckUserSession() {
  yield takeLatest("user/checkUserSession", isUserAuthenticated);
}

export function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
    call(onCheckUserSession),
  ]);
}
