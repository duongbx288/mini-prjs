import { useContext } from "react";
import "./login.scss";
import useInput from "../../hooks/useInput";
import { FirebaseAuthContext } from "../../context/AuthContext";

const Login = () => {
  const email = useInput("");
  const password = useInput("");
  const value = useContext(FirebaseAuthContext);
  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // auth with firebase
    if (value && value.login) value.login(email.value, password.value);
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
      </form>
      
    </div>
  );
};

export default Login;
