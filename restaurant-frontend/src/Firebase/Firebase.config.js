// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPhle4UGmTmeIIpXuyoHnXMfm8OIR3VcY",
  authDomain: "sifat-dbms.firebaseapp.com",
  projectId: "sifat-dbms",
  storageBucket: "sifat-dbms.firebasestorage.app",
  messagingSenderId: "888088053237",
  appId: "1:888088053237:web:95a7ba7f3bd8aa1efd8cbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app 