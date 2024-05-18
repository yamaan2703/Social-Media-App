import React, { createContext, useEffect, useState } from "react";
import auth from '@react-native-firebase/auth';


export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unSub = auth().onAuthStateChanged((user: any) => {
            setCurrentUser(user);
        });
        return () => unSub();
    }, []);

    return (
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    );
};
