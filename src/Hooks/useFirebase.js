import FirebaseInit from './../Firebase/firebase.init';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from 'react-router-dom';

FirebaseInit();

const useFirebase = () => {
  const auth = getAuth();
  // ⚡ Bolt Optimization: Memoize provider to avoid recreating it on every render
  const googleProvider = useMemo(() => new GoogleAuthProvider(), []);
  const navigate = useNavigate();
  const redirectURL = '/home';

  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // ⚡ Bolt Optimization: Wrap handlers in useCallback to maintain stable references
  const handleGoogleLogin = useCallback(() => {
    return signInWithPopup(auth, googleProvider);
  }, [auth, googleProvider]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setIsLoading(false)
    });
    return () => unsubscribe;
  }, [auth]);

  const handleLogout = useCallback(() => {
    signOut(auth)
      .then(() => {
        setUser({});
        navigate(redirectURL);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, [auth, navigate]);

  const handleUserRegister = useCallback((email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }, [auth]);

  const handleUserLogin = useCallback((email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }, [auth]);

  // ⚡ Bolt Optimization: Memoize return value to prevent unnecessary Context updates
  return useMemo(() => ({
    handleGoogleLogin,
    handleLogout,
    handleUserRegister,
    handleUserLogin,
    user,
    error,
    isLoading,
  }), [handleGoogleLogin, handleLogout, handleUserRegister, handleUserLogin, user, error, isLoading]);
};

export default useFirebase;
