import firebase  from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import 'firebase/firestore'
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCqFh9be4ZpWzcE1p2S368c0GoZa2EhTUM",
  authDomain: "ratexam-daf9e.firebaseapp.com",
  projectId: "ratexam-daf9e",
  storageBucket: "ratexam-daf9e.appspot.com",
  messagingSenderId: "624222301855",
  appId: "1:624222301855:web:c9da328570dc56c140bcaa",
  measurementId: "G-6S42DMZFWW"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// Step 2 : Init the firestore service 
// If we want to do any communication with the firestore db (eg. add documents) 
// we can use projectFirestore variable 
const projectFirestore = firebase.firestore() 
//Step 3 : Export projectFirestore 
// This will enable the use the firebase in different components 
const projectAuth = firebase.auth();

export {projectFirestore,projectAuth} 

