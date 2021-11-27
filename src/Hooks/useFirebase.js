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

import { useEffect, useState } from "react";
import { useHistory } from 'react-router';

FirebaseInit();

const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const history = useHistory();
  const redirectURL = '/home';

  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);



  const handleGoogleLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)

  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setIsLoading(false)
    });
    return () => unsubscribe;
  }, [auth]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        history.push(redirectURL);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleUserRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)

  };

  const handleUserLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)

  };

  return {
    handleGoogleLogin,
    handleLogout,
    handleUserRegister,
    handleUserLogin,
    user,
    error,
    isLoading,
  };
};

export default useFirebase;
