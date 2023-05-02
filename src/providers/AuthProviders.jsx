import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);

    // create User
    const createUser = (name, email, photo, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    const logout = () => {
        return signOut(auth)
    }

    // google signIn
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // 
    const GitHubSignIn = () => {
        return signInWithPopup(auth, gitHubProvider)
    }

    // observe
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Auth state change', currentUser);
            setUser(currentUser);
        });
        return () => {
            unSubscribe()
        }
    }, [])


    const authInfo = {
        user,
        createUser,
        login,
        logout,
        googleSignIn,
        GitHubSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;