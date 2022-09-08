import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAcQXMiHMAS7OCdacdkl646HTcjBjLNCN8",
  authDomain: "turners-lycv.firebaseapp.com",
  projectId: "turners-lycv",
  storageBucket: "turners-lycv.appspot.com",
  messagingSenderId: "265838718587",
  appId: "1:265838718587:web:eb5575fab731f0e56abcde",
  measurementId: "G-QEXT1VLKKD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage, app };