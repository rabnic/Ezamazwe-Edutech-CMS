import React, { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState({
        name: "Nicholas",
        passwordChanged: false
    })

    const loadAdmin = () => {
        setAdmin(
            {
                name: "Nicholas",
                passwordChanged: false
            }
        )
    }

    return (
        <AdminContext.Provider value={{ admin }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdminContext = () => useContext(AdminContext);
