import { createContext, useContext, useEffect, useState } from "react";
import { peticionLoginUsuario, peticionRegistrarUsuario, peticionVerificarLogin } from "../api/user";
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
    const [loadingUser, setLoadingUser] = useState(true);
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
  
    const verificarLogin = async () => {
        const cookies = Cookies.get();
        if(cookies.token){
            try {
                const response = await peticionVerificarLogin()
                setUsuario(response.data)
                setEstaAutenticado(true)
                 setLoadingUser(false);
                
            } catch (error) {
                console.log(error);
                console.log('Error: usuario no autenticado BACKEND')
                 setLoadingUser(false);
            }
           
        }else{
            setUsuario(null)
            setEstaAutenticado(false)
            console.log('usuario NO logeado FRONT')
             setLoadingUser(false);
        }
    }

    useEffect(() => {
        verificarLogin();
       
    }, [])

    return (
        <UserContext.Provider value={{
            registrarUsuario,
            loginUsuario,
            logoutUsuario,
            loadingUser,
            usuario,
            estaAutenticado,
            error

        }}>
            {children}
        </UserContext.Provider>
    )
}