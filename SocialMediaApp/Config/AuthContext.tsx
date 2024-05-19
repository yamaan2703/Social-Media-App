import React, { createContext, useEffect, useState } from "react";
import auth from '@react-native-firebase/auth';


export const AuthContext = createContext("");

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentUser, setCurrentUser] = useState("");

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


// import React, { createContext, useEffect, useState } from 'react';
// import auth from '@react-native-firebase/auth';

// interface AuthContextType {
//   currentUser: firebase.User | null;
// }

// export const AuthContext = createContext<AuthContextType | null>(null);

// export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
//   const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

//   useEffect(() => {
//     const unSub = auth().onAuthStateChanged((user) => {
//       setCurrentUser(user);
//     });
//     return () => unSub();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ currentUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
