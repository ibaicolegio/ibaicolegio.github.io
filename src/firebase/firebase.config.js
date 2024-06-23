import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDrUKdkGkaBkPtWFQDF9BkiC-_FEH0ZWoo",
    authDomain: "ibaicolegio-d38fa.firebaseapp.com",
    projectId: "ibaicolegio-d38fa",
    storageBucket: "ibaicolegio-d38fa.appspot.com",
    messagingSenderId: "430038539994",
    appId: "1:430038539994:web:a6fe926c9ded3292ce8fe3",
    measurementId: "G-RQVJB447Z6"

/*     apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);
export default app;