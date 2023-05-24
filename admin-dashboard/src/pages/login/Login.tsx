import { useState } from "react";
import "./login.scss";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // auth with firebase
    signInWithEmailAndPassword(auth, email, password)
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
        <input type="email" name="email" placeholder="email" onChange={e=> setEmail(e.target.value)}/>
        <input type="password" name="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
        <button type="submit">Submit</button>
        {error && <span>Wrong email or password</span>}
      </form>
    </div>
  );
};

export default Login;
