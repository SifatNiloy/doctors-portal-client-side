import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth= getAuth(app)
const AuthProvider = ({children}) => {
    const authInfo={

    }
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;