import firebase from "firebase/app";
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJE6QSd3FqQPsepIqg8TKVp0kcdQcRNUw",
  authDomain: "imagetext-92db1.firebaseapp.com",
  databaseURL: "https://imagetext-92db1.firebaseio.com",
  projectId: "imagetext-92db1",
  storageBucket: "imagetext-92db1.appspot.com",
  messagingSenderId: "1093818141187",
  appId: "1:1093818141187:web:125326c345ec4b9fd31c36",
  measurementId: "G-627E7HH1S1",
};

firebase.initializeApp(firebaseConfig);
const { storage } = firebase.storage();
export { storage, firebase as default };
