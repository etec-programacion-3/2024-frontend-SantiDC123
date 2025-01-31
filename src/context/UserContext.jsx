import { createContext, useContext, useEffect, useState } from "react";
import { peticionLoginUsuario, peticionRegistrarUsuario } from "../api/user";
import Cookies from 'js-cookie'

export const UserContext = createContext();

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('El UserContext debe ser utilizado en conjunto con UserProvider');
    }
    return context;
}

export const UserProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null)
    const [estaAutenticado, setEstaAutenticado] = useState(false)
    const [error, setError] = useState([])

    const registrarUsuario = async (usuario) => {
        try {
            const response = await peticionRegistrarUsuario(usuario);
            setUsuario(response.data);
            setEstaAutenticado(true)
        } catch (error) {
            console.log(error.response.data)
            setError([error.response.data.message])
        }
    }

    const loginUsuario = async (usuario) => {
        try {
            const response = await peticionLoginUsuario(usuario);
            setUsuario(response.data);
            setEstaAutenticado(true);
        } catch (error) {
            console.log(error.response.data)
            setError([error.response.data.message])
        }
    }

    const logoutUsuario = () => {
        Cookies.remove('token')
        setEstaAutenticado(false)
        setUsuario(null)
    }
    useEffect(() => {

    }, [estaAutenticado])
    return (
        <UserContext.Provider value={{
            registrarUsuario,
            loginUsuario,
            logoutUsuario,
            usuario,
            estaAutenticado,
            error

        }}>
            {children}
        </UserContext.Provider>
    )
}