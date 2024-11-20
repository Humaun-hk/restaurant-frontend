import app from "../Firebase/Firebase.config"
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GithubAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import PropTypes from "prop-types";

// creating context with export for login and registration
export const AuthContext = createContext(null);

// getting auth from firebase
const auth = getAuth(app);

// Authentication with Google Service
const googleAuth = new GoogleAuthProvider();

// Authentication with Git Service
const gitHubAuth = new GithubAuthProvider();

//Authentication with Facebook
const facebookAuth = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  // Setting states for users and handle loading time
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // creating new user with email and password function

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signin function with email and password

  const signIn = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // SignOut function

  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  // Update user profile function

  const handleUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // SignIn with Google Service function
  const signInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleAuth);
  };
  // SignIn with Github Service function
  const signInWithGitHub = () => {
    setIsLoading(true);
    return signInWithPopup(auth, gitHubAuth);
  };

  // SignIn with facebook service function
  const signInWithFacebook = () => {
    setIsLoading(true);
    return signInWithPopup(auth, facebookAuth);
  };

  // Observe auth state change

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsers(currentUser);
      setIsLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const AuthData = {
    users,
    isLoading,
    createUser,
    signIn,
    logOut,
    handleUpdateProfile,
    signInWithGoogle,
    signInWithGitHub,
    signInWithFacebook,
  };
  return (
    <AuthContext.Provider value={AuthData}> {children} </AuthContext.Provider>
  );
};

export default AuthProvider;

// Proptypes declaration
AuthProvider.propTypes = {
  children: PropTypes.node,
};
