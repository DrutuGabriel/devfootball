import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyCB76cWA_YmSc_mSVgY22jsBiAqpy1xD_c",
  authDomain: "m-city-5fe98.firebaseapp.com",
  databaseURL: "https://m-city-5fe98.firebaseio.com",
  projectId: "m-city-5fe98",
  storageBucket: "m-city-5fe98.appspot.com",
  messagingSenderId: "45993700517",
  appId: "1:45993700517:web:9220d4c7ff8310ede3b14c"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');

export {
  firebase,
  firebaseMatches,
  firebasePromotions
}