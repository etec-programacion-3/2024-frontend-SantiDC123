import { Navigate, Outlet } from "react-router";
import { useUserContext } from "./context/UserContext"

export const RutasProtegidasAdmin = () => {

    const { usuario, loadingUser, estaAutenticado } = useUserContext();
    console.log('Usuario cargando: ' + loadingUser);
    // si ya termino de cargar/verificar si hay usuario logeado. Recién ahí verifico.
    if (!loadingUser) {
        if (!estaAutenticado) return <Navigate to="/login" replace />
        if (usuario.rol != 'admin') return <Navigate to="/" replace />
    }

    return <Outlet />
}
