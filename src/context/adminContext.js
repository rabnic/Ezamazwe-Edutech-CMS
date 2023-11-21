import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, checkAuthState } from '../services/firebase';
import { useAuthContext } from './authContext';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const { signIn, signOut } = useAuthContext();

    const [admin, setAdmin] = useState({
        email: "",
        fullName: "Admin",
        passwordChanged: false,
        phoneNumber: "",
        uid: "",
        admin: false,
        permissions: "",
    })
    console.log("---admin-context", admin)

    const loadAdmin = (_admin) => {
        setAdmin(_admin)
    }

    useEffect(() => {
        console.log("Trying to check authStateChanged")
        const unsubscribe = () => {
            checkAuthState().then((adminData) => {
                console.log("authState", adminData);
                if (adminData && adminData.admin === true) {
                    loadAdmin(adminData)
                    signIn()
                } else {
                    signOut()
                }
            })
        }

        return () => unsubscribe();
    }, []);

    return (
        <AdminContext.Provider value={{ admin, loadAdmin }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdminContext = () => useContext(AdminContext);
