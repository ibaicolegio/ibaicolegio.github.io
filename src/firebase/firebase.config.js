import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "ibaicolegio-d38fa.firebaseapp.com",
    projectId: "ibaicolegio-d38fa",
    storageBucket: "ibaicolegio-d38fa.appspot.com",
    messagingSenderId: "430038539994",
    appId: "1:430038539994:web:a6fe926c9ded3292ce8fe3",
    measurementId: "G-RQVJB447Z6"

    /* apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);
export default app;