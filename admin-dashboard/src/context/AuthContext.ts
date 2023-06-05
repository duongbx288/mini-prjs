import { createContext, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

type FirebaseAuth = {
  user: User;
  login: (email: string, password: string) => void;
  logout: () => void;
  signup: (email: string, password: string) => void;
};

export const FirebaseAuthContext = createContext<FirebaseAuth | null>(null);

export const FirebaseAuthProvider = () => {
  const [user, setUser] = useLocalStorage<User | null>("user", null);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
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
  };

  const signup = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password).
      then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        navigate("");
      }).catch((error) => {
        window.alert(`${error.code} : ${error.message}`)
      })
  }

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      signup
    }),
    [user]
  );

  return value;
};
