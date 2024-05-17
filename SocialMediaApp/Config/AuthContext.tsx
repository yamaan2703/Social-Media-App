import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./FirebaseConfig";

export const AuthContext = createContext<any>("");

export const AuthContextProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState<any>(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user:any) => {
            setCurrentUser(user);
            console.log(user);
        });
        return () => unsub();
    }, []);

    return (
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    );
};
