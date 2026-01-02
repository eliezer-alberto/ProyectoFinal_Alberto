import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeKY--eHayOKNF-_ExDW3Hfg0H9oXiprc",
  authDomain: "proyectofinal-alberto.firebaseapp.com",
  projectId: "proyectofinal-alberto",
  storageBucket: "proyectofinal-alberto.firebasestorage.app",
  messagingSenderId: "677601661570",
  appId: "1:677601661570:web:f255d9aa2db366bf405a9b",
  measurementId: "G-C2BM5ER5F8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);