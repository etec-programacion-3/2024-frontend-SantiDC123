import { Navigate, Outlet } from "react-router";
import { useUserContext } from "./context/UserContext"

export const RutasProtegidasAdmin = () => {

    const { usuario, isLoading, estaAutenticado } = useUserContext();
    if (!isLoading) {
        if (!estaAutenticado) return <Navigate to="/login" replace />
        if (usuario.rol != 'admin') return <Navigate to="/" replace />
    }

    return <Outlet />
}
