import {createContext} from 'react';

interface AuthContextProps{
    placeholder: string;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({children}: any){


    return(
        <AuthContext.Provider value={{
            placeholder: 'Placeholder',
        }}>
            {children}
        </AuthContext.Provider>
    )
}