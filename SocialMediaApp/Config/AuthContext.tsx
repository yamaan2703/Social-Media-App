// import React, { createContext, useEffect, useState } from "react";
// import auth from '@react-native-firebase/auth';


// export const AuthContext = createContext("");

// export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
//     const [currentUser, setCurrentUser] = useState("");

//     useEffect(() => {
//         const unSub = auth().onAuthStateChanged((user: any) => {
//             setCurrentUser(user.Id);
//         });
//         return () => unSub();
//     }, []);

//     return (
//         <AuthContext.Provider value={currentUser}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

