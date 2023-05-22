import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth'
import {Firestore, getFirestore} from 'firebase/firestore'
import  firebase  from "firebase/compat/app";
import  "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAxr0IwQGB2HUd297TDX_1sCT6saK-GgUs",
    authDomain: "shabna-cb794.firebaseapp.com",
    projectId: "shabna-cb794",
    storageBucket: "shabna-cb794.appspot.com",
    messagingSenderId: "1070580866076",
    appId: "1:1070580866076:web:913ca9c8a70e22350713d9"
  };
  const app = firebase.initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = firebase.storage();

// export const storage = storage(app);