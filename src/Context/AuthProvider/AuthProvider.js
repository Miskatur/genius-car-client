import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/Firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = name => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = provider => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logout = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)

        })
        return () => unsubscribe();
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        updateUser,
        setLoading,
        userSignIn,
        signInWithGoogle,
        logout

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;