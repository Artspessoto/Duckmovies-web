import { createContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext({});

export function AuthProvider({ children }){
    //signInFunction 
    return (
        <AuthContext.Provider>{children}</AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

