import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebase';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState({
        email: "",
        fullName:"Admin",
        passwordChanged: false,
        phoneNumber:"",
        uid:"",
        admin:false,
        permissions:"",
    })
    console.log("---admin-context", admin)

    const loadAdmin = (_admin) => {
        setAdmin(_admin)
    }

    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          console.log("current Admin", user)
        });
        return () => unsubscribe();
      }, []);

    return (
        <AdminContext.Provider value={{ admin, loadAdmin }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdminContext = () => useContext(AdminContext);
