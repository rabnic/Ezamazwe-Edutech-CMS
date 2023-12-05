import React, { createContext, useContext, useState } from 'react';
import { signOutFromFirebase } from '../services/firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState();

    const signIn = () => {
        setAuthenticated(true);
    };

    const signOut = () => {
        signOutFromFirebase()
        setAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
