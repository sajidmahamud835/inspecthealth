import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import './Login.css';

const Login = () => {
  const {
    handleGoogleLogin,
    handleUserLogin,
  } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleSubmitting, setIsGoogleSubmitting] = useState(false);
  const redirectURL = '/home';

  const hanldeEmail = (e) => {
    setEmail(e.target.value);
  };
  const hanldePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    handleUserLogin(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(redirectURL);
      })
      .catch((error) => {
        setError(error.message);
        setIsSubmitting(false);
      });
  };

  const loginWithGoogle = () => {
    setIsGoogleSubmitting(true);
    setError('');
    handleGoogleLogin()
      .then((result) => {
        setUser(result.user);
        navigate(redirectURL);
      })
      .catch((error) => {
        setError(error.message);
        setIsGoogleSubmitting(false);
      });
  }

  return (
    <div className="login-page">
      <div className="form-container">
        <div className="form-bg">
          <div className="headline">
            <h3>Welcome Back</h3>
            <p>Sign in to continue to InspectHealth</p>
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <div className="mb-3">
            <button
              onClick={loginWithGoogle}
              type="button"
              className="btn btn-outline-dark google-btn-custom"
              disabled={isGoogleSubmitting}
              aria-disabled={isGoogleSubmitting}
            >
              {isGoogleSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Connecting...
                </>
              ) : (
                <>
                  <i className="fab fa-google"></i>
                  Continue with Google
                </>
              )}
            </button>
          </div>

          <div className="divider">
            <span>or</span>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                onChange={hanldeEmail}
                placeholder="Email address"
                aria-label="Email address"
                type="email"
                className="form-control form-custom"
                required
              />
            </div>

            <div className="mb-3">
              <input
                onChange={hanldePassword}
                placeholder="Password"
                aria-label="Password"
                type="password"
                className="form-control form-custom"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary custom-btn"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>

            <div className="already-account">
              <p><a href="/" className="log-link">Forgot password?</a></p>
            </div>

            <div className="already-account">
              <p>Don't have an account? <Link className="log-link" to="/register">Create one</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;