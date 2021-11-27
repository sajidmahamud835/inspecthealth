import React, { useState } from "react";
import { Link,useHistory } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import './Login.css';

const Login = () => {
  const {
    handleGoogleLogin,
    handleUserLogin,
  } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [user, setUser] = useState([]);
  const [error, setError] = useState('');
  const redirectURL = '/home';
  const hanldeEmail = (e) => {
    setEmail(e.target.value);
  };
  const hanldePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    handleUserLogin(email, password)
    .then((result) => {
      setUser(result.user);
      history.push(redirectURL);
    })
    .catch((error) => {
      setError(error.message);
    });
  };
  const loginWithGoogle = () => {
    handleGoogleLogin()
    .then((result) => {
      setUser(result.user);
      history.push(redirectURL);
    })
    .catch((error) => setError(error.message))
  }


    return (
        <div className="mt-5">
          {error && 
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
          }
            <div className="row pt-5">

    <div className="col-md-3 form">
      <div className="form-bg">

            <div className="headline">
              <h3>Login</h3>
            </div>

            <div className="mb-3">
              <button onClick={loginWithGoogle} type="submit" className="btn btn-outline-dark google-btn-custom">Continue with Google</button>
            </div>

        <form onSubmit={handleLogin}>

            <div><p className="text-center">or</p></div>

            <div className="mb-3">
              <input onChange={hanldeEmail} placeholder="Email" type="email" className="form-control form-custom" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>

            <div className="mb-3">
              <input onChange={hanldePassword} placeholder="Password" type="password" className="form-control form-custom" id="exampleInputPassword1"/>
            </div>

            <button type="submit" className="btn btn-success custom-btn">Login</button>

            <div className="already-account">
            <p><a href="/">Forgot password?</a></p>
            </div>

            <div className="already-account">
            <p>No account? <Link className="log-link" to="/register">Create one</Link> </p>
            </div>
        </form>
        </div>
    </div>

    </div>
        </div>
    );
};

export default Login;