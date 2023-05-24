import { useState } from 'react';
import './login.scss';

const Login = () => {

    const [error, setError] = useState(false);


    const handleLogin = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: {value: string};
            password: {value: string};
        }
        const email = target.email.value;
        const password = target.password.value;
        console.log(email, password);
    }

    return (
        <div className="login">
            <form action="" onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="email"/>
                <input type="password" name="password" placeholder="password"/>
                <button type="submit">Submit</button>
                {error && <span>Wrong email or password</span>}
            </form>
        </div>
    )   
}

export default Login;