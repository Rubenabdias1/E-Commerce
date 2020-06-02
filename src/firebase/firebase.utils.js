import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA8DXbb1iZYkfMNojGKtXy61jotP0sCGiw",
  authDomain: "e-commmerce-db.firebaseapp.com",
  databaseURL: "https://e-commmerce-db.firebaseio.com",
  projectId: "e-commmerce-db",
  storageBucket: "e-commmerce-db.appspot.com",
  messagingSenderId: "168053065707",
  appId: "1:168053065707:web:e7dd77dbe8ada1ec933bae",
  measurementId: "G-L7YMFFEVRN",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
