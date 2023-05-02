import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth);
    }


    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('log', loggedUser)
            setUser(loggedUser);
        })

        return () => {
            unsubscribe();
        }

    }, [])


    const authInfo = {
        user,
        createUser,
        signIn,
        logout,
        googleLogin,
        githubLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;