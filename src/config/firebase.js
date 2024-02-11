import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmquvTHTDl2qhS34m2KOxQZGFI5H66-ZM",
  authDomain: "colab26-947ce.firebaseapp.com",
  projectId: "colab26-947ce",
  storageBucket: "colab26-947ce.appspot.com",
  messagingSenderId: "416351566821",
  appId: "1:416351566821:web:660e4273ed8fc58fa98d0c",
  measurementId: "G-ET8FK1N416"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;