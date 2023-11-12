import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAtBQqcrUrv42RJV4d7lSApLHKn5t_50_0",
  authDomain: "e-commerce-reactjs-d92ab.firebaseapp.com",
  projectId: "e-commerce-reactjs-d92ab",
  storageBucket: "e-commerce-reactjs-d92ab.appspot.com",
  messagingSenderId: "572751068621",
  appId: "1:572751068621:web:b2e5d5a46720486d791884"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
