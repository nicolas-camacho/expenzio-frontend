import { ReactElement ,createContext, useState } from "react";

type AuthContextData = {
    isAuthenticated: boolean;
    setAuthentication: () => void;
}

const AuthContext = createContext<AuthContextData>({
    isAuthenticated: false,
    setAuthentication: () => {}
} as AuthContextData);

type AuthContextProviderProps = {
    children: ReactElement;
}

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const setAuthentication = () => {
        setIsAuthenticated(true)
    }

    const value = {
        isAuthenticated,
        setAuthentication
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    ) 
}

export {
    AuthContext,
    AuthContextProvider
}