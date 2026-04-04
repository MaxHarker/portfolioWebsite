import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyB_PJTlTr7_5uIlIj5C-yTymj71wHr9OK8",
  authDomain: "resumedatabase-9875a.firebaseapp.com",
  databaseURL: "https://resumedatabase-9875a-default-rtdb.firebaseio.com",
  projectId: "resumedatabase-9875a",
  storageBucket: "resumedatabase-9875a.firebasestorage.app",
  messagingSenderId: "720324531938",
  appId: "1:720324531938:web:d0eb70676e8f5106db30bb",
  measurementId: "G-ZQB7FB92ZG"
};

const app = initializeApp(firebaseConfig)
export const database = getDatabase(app)