import { useState } from "react";
import "./login.scss";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import useInput from "../../hooks/useInput";

const Login = () => {
  const [error, setError] = useState(false);
  const email = useInput("");
  const password= useInput("");

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // auth with firebase
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(`${errorCode} : ${errorMessage}`);
      });
  };

  return (
    <div className="login">
      <form action="" onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="email" {...email}/>
        <input type="password" name="password" placeholder="password" {...password}/>
        <button type="submit">Submit</button>
        {error && <span>Wrong email or password</span>}
      </form>
    </div>
  );
};

export default Login;
