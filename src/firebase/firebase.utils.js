import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMemRhtUGtsb1ytiTLrNw1z_6fx7oNsqg",
  authDomain: "blockbusterfilms-44c6c.firebaseapp.com",
  projectId: "blockbusterfilms-44c6c",
  storageBucket: "blockbusterfilms-44c6c.appspot.com",
  messagingSenderId: "443504482221",
  appId: "1:443504482221:web:9de4087b0c0bf35d897324",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(database, `/users/${userAuth.uid}`);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        email,
        username,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const getCurrentUser = async () => {
  return new Promise((resolve, reject) => {
    const unsubcribe = auth.onAuthStateChanged((userAuth) => {
      unsubcribe();
      resolve(userAuth);
    }, reject);
  });
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const auth = getAuth();
