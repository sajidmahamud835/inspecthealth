import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import '../Login/Login.css';

const Register = () => {
  const {
    handleGoogleLogin,
    handleUserRegister,
  } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const handleRegister = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    handleUserRegister(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(redirectURL);
      })
      .catch((error) => {
        setError(error.message);
        setIsSubmitting(false);
      });
  };

  const signUpWithGoogle = () => {
    setIsGoogleSubmitting(true);
    handleGoogleLogin()
      .then((result) => {
        setUser(result.user);
        navigate(redirectURL);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsGoogleSubmitting(false));
  }

  return (
    <div className="login-page">
      <div className="form-container">
        <div className="form-bg">
          <div className="headline">
            <h3>Create Account</h3>
            <p>Sign up to get started with InspectHealth</p>
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <div className="mb-3">
            <button
              onClick={signUpWithGoogle}
              type="button"
              className="btn btn-outline-dark google-btn-custom"
              disabled={isGoogleSubmitting}
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

          <form onSubmit={handleRegister}>
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
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </button>

            <div className="already-account">
              <p>Already have an account? <Link className="log-link" to="/login">Sign in</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;