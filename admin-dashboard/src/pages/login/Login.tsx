import { useContext, useState } from "react";
import "./login.scss";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { FirebaseAuthContext } from "../../context/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const email = useInput("");
  const password = useInput("");
  const navigate = useNavigate();
  const value = useContext(FirebaseAuthContext);
  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // auth with firebase
    if (value) value.login(email.value, password.value);
  };

  return (
    <div className="login">
      <form action="" onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="email" {...email} />
        <input
          type="password"
          name="password"
          placeholder="password"
          {...password}
        />
        <button type="submit">Submit</button>
        {error && <span>Wrong email or password</span>}
      </form>
      
    </div>
  );
};

export default Login;
