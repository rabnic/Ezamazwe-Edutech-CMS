import React, { createContext, useContext, useState } from 'react';

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

    return (
        <AdminContext.Provider value={{ admin, loadAdmin }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdminContext = () => useContext(AdminContext);
