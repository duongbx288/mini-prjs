import React, { ReactElement, createContext, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { User, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

type FirebaseAuth = {
    user: User
    login: (email: string, password: string) => void
    logout: () => void
}

export const FirebaseAuthContext = createContext<FirebaseAuth | null>(null);

export const FirebaseAuthProvider = () => {
    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();

    const login = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setUser(user);
          navigate("");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          window.alert(`${errorCode} : ${errorMessage}`);
        });
    }

    const logout = () => {
        setUser(null);
        navigate("/login");
    }

    const value = useMemo(() => ({
        user, login, logout
    }), [user]);

    return value;
}
