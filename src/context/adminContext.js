import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, getUserCustomClaims } from '../services/firebase';
import { useAuthContext } from './authContext';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const { signIn, signOut } = useAuthContext();

    const [admin, setAdmin] = useState({
        email: "",
        fullName: "",
        passwordChanged: false,
        phoneNumber: "",
        uid: "",
        admin: false,
        permissions: "",
    })

    const loadAdmin = (_admin) => {
        setAdmin(_admin)
    }

    useEffect(() => {

        console.log("Trying to check authStateChanged");
        onAuthStateChanged(auth, async (_user) => {
            console.log("user after onAuthState", _user)
            const user = _user ? await getUserCustomClaims(_user) : _user;
            console.log("user after getUserCustomClaims", user)
            if (user && user.admin) {
                loadAdmin(user);
                signIn();
            } else {
                signOut();
            }
        });

    
    }, []);

    return (
        <AdminContext.Provider value={{ admin, loadAdmin }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdminContext = () => useContext(AdminContext);