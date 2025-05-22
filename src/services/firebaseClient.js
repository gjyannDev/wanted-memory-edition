import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALFNzSwND0dCfbk6-M5do8G_lQXrp6pg0",
  authDomain: "wanted-memory-game.firebaseapp.com",
  projectId: "wanted-memory-game",
  storageBucket: "wanted-memory-game.firebasestorage.app",
  messagingSenderId: "844088598212",
  appId: "1:844088598212:web:e7f099dfe93c192e1fb391",
};

const app = initializeApp(firebaseConfig);

let doc_id = "tVvxzq3JfZh2VG2CSAw9";

export const db = getFirestore(app);
export const col_ref = collection(db, "memorygame");
export const user_ref = doc(col_ref, doc_id);
export default app;
