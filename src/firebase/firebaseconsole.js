import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// fire base store
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "",
  authDomain: "super-mall-web-applicati-22e23.firebaseapp.com",
  databaseURL:
    "",
  projectId: "super-mall-web-applicati-22e23",
  storageBucket: "super-mall-web-applicati-22e23.appspot.com",
  messagingSenderId: "306244265724",
  appId: "",
  measurementId: "G-E6ZQWVGX17",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const googleProvider = new GoogleAuthProvider(app);
export const auth = getAuth(app);

// fire store
export const db = getFirestore(app);
export default app;
export const storage = getStorage(app);
export const database = getDatabase(app);
