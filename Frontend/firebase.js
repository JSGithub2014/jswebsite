import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAQr5MedM1Ay5A4uCtAukwPSwAq-YxCBz4",
  authDomain: "jsasia-bf22b.firebaseapp.com",
  projectId: "jsasia-bf22b",
  storageBucket: "jsasia-bf22b.firebasestorage.app",
  messagingSenderId: "905385955827",
  appId: "1:905385955827:web:6447b8527156cf8d0c8286",
  measurementId: "G-R1PRX2Z2Q7",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();

const analytics = getAnalytics(app);
