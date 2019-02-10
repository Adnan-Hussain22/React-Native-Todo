import firebase from "firebase";
import "firebase/firestore";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDtU8L3vcvWbVrvHV4iVGFCM_Z-EjtjkgQ",
  authDomain: "react-native-todo-5dc65.firebaseapp.com",
  databaseURL: "https://react-native-todo-5dc65.firebaseio.com",
  projectId: "react-native-todo-5dc65",
  storageBucket: "react-native-todo-5dc65.appspot.com",
  messagingSenderId: "4499817220"
};
firebase.initializeApp(config);
const fireStore = firebase.firestore();
export { fireStore,firebase };
