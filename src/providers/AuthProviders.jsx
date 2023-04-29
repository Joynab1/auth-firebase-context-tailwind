import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { unstable_useBlocker } from 'react-router-dom';

const auth = getAuth(app)
export const AuthContext = createContext(null);

const googleAuthProvider = new GoogleAuthProvider()

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth);
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])
    const authInfo = {
        user, createUser, signIn, logOut, signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;