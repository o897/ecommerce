import { createContext,useState,useContext,useEffect } from "react";

const SERVER_URL = 'http://localhost:3000';

// create context
const AuthContext = createContext();

// Provider component

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
}