import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZJS-Y2urQD_YxiF3ahFAkLqUTgJQS5tw",
  authDomain: "miniblog-d1542.firebaseapp.com",
  projectId: "miniblog-d1542",
  storageBucket: "miniblog-d1542.appspot.com",
  messagingSenderId: "802436383835",
  appId: "1:802436383835:web:9959a9855a66651471ab7e"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
