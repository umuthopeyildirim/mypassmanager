// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
const { initializeAppCheck, ReCaptchaV3Provider } = require("firebase/app-check");

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "mypassmanager-web.firebaseapp.com",
  projectId: "mypassmanager-web",
  storageBucket: "mypassmanager-web.appspot.com",
  messagingSenderId: "41353234371",
  appId: "1:41353234371:web:66e0623560659f9cd71f76",
  measurementId: "G-7HH6TMBG33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6Ld73fMhAAAAAFlopXQQCkHe2UwLZziMN6_1schL'),
  isTokenAutoRefreshEnabled: true
});

export { app, analytics, perf, appCheck };