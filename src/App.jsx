import React, {useState} from "react";

import Home from "./page/Home";
import Login from "./page/Login";

import { AuthProvider } from "./context/AuthContext";
import firebaseApp from "./firebase/firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";



const auth = getAuth(firebaseApp);

function App() {
    const [user, setUser] = useState(null);
    onAuthStateChanged(auth, (usuarioFirebase) => {
        usuarioFirebase ? setUser(usuarioFirebase) : setUser(null);
    })

    return <><AuthProvider>{user ? <Home/> : <Login/>}</AuthProvider></>;
}

export default App;
