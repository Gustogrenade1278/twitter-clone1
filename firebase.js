import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWmmj_nbENl9E8sW232gtnFRjrGBn7um4",
  authDomain: "twitter-clone1-7467f.firebaseapp.com",
  projectId: "twitter-clone1-7467f",
  storageBucket: "twitter-clone1-7467f.appspot.com",
  messagingSenderId: "682396460301",
  appId: "1:682396460301:web:f1a9e69ff55c2b46713c44",
};

//   Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
