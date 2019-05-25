import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: 'lifequeue-ea7ed.firebaseapp.com',
  databaseURL: 'https://lifequeue-ea7ed.firebaseio.com',
  projectId: 'lifequeue-ea7ed',
  storageBucket: 'lifequeue-ea7ed.appspot.com',
  messagingSenderId: '734633091461',
  appId: '1:734633091461:web:9af915c94882d782'
};

// Initializing firebase
firebase.initializeApp(config);

// Initialize firestore
firebase.firestore();

export default firebase;
