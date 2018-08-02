import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA7W6QCN_53mmSUU8UuJgySdgZC_SOHKqw",
  authDomain: "mapping-utility.firebaseapp.com",
  databaseURL: "https://mapping-utility.firebaseio.com",
  projectId: "mapping-utility",
  storageBucket: "mapping-utility.appspot.com",
  messagingSenderId: "866449667325"
};

firebase.initializeApp(config);

const auth = firebase.auth();

export { auth, firebase };
