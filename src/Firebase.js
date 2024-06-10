// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsRiw1PHR-y7MIgNaoP3Q8s6PaOVGk544",
  authDomain: "chat-app-reactjs-21db1.firebaseapp.com",
  projectId: "chat-app-reactjs-21db1",
  storageBucket: "chat-app-reactjs-21db1.appspot.com",
  messagingSenderId: "820836495616",
  appId: "1:820836495616:web:cbba8c40464d972b61c3e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
