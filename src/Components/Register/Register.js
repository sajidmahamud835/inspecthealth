import React, { useState } from "react";
import { Link,useHistory,useLocation } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import './Register.css';


const Register = () => {
  const {
    handleGoogleLogin,
    handleUserRegister,
  } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  // console.log(email, password);

  const handleRegister = () => {
    handleUserRegister(email, password)
    .then((result) => {
      setUser(result.user);
      history.push(redirectURL);
    })
    .catch((error) => {
      setError(error.message);
    });
  };

  const signUpWithGoogle = () => {
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
            <div className="row">

<div className="col-md-3 form">
  <div className="form-bg">
  <div className="headline">
              <h3>Register</h3>
        </div>

        <div className="mb-3">
          <button onClick={signUpWithGoogle} type="submit" className="btn btn-outline-dark google-btn-custom">Continue with Google</button>
        </div>
    <form onSubmit={handleRegister}>

        <div><p className="text-center">or</p></div>

        <div className="mb-3">
          <input onChange={hanldeEmail} placeholder="Email" type="email" className="form-control form-custom" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>

        <div className="mb-3">
          <input onChange={hanldePassword} placeholder="Password" type="password" className="form-control form-custom" id="exampleInputPassword1"/>
        </div>

        <button type="submit" className="btn btn-success custom-btn">Register</button>

        <div className="already-account">
              <p>Already have an account? <Link className="reg-link" to="/login">Login</Link> </p>
        </div>
        
    </form>
    </div>
</div>

</div>
        </div>
    );
};

export default Register;