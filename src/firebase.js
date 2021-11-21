import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAegaGCL9pb_o4iWKEtv85Oo2Tgp0sswBE",
  authDomain: "clyric-17607.firebaseapp.com",
  projectId: "clyric-17607",
  storageBucket: "clyric-17607.appspot.com",
  messagingSenderId: "946277984431",
  appId: "1:946277984431:web:3fd16035602a48cac5cc5a",
  measurementId: "G-S32EP0GZ34",
};

const initFirebaseApp = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return { app, analytics };
};

export { initFirebaseApp };
