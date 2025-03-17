import { Link } from 'react-router'
import './Navbar.css'
import { useUserContext } from '../../context/UserContext'

export const Navbar = () => {

    const { estaAutenticado, logoutUsuario, usuario } = useUserContext();
    
    
    return (
        <header className='main-header'>
            <div className="contenedor">
                <img src="/logo.png" alt="" className="logo-img" />

                <nav className='menu'>
                    <ul className='listado-menu'>

                        <li className='item-menu'><Link to="/" className='enlace-menu'>Home</Link></li>
                        {
                            estaAutenticado
                                ?
                                <>
                                    <li className='item-menu'><Link to="/perfil" className='enlace-menu'>Perfil</Link></li>
                                    <li className='item-menu'><Link to="/carrito" className='enlace-menu'>Carrito</Link></li>
                                    {
                                        usuario.rol == 'admin' &&
                                        <li className='item-menu'><Link to="/panel" className='enlace-menu'>Panel</Link></li>
                                    }
                                    <li className='item-menu'><Link to="/login" onClick={logoutUsuario} className='enlace-menu'>Salir</Link></li>

                                </>
                                :
                                <>
                                    <li className='item-menu'><Link to="/registro" className='enlace-menu'>Registro</Link></li>
                                    <li className='item-menu'><Link to="/login" className='enlace-menu'>Login</Link></li>
                                </>
                        }


                    </ul>
                </nav>
            </div>

        </header>
    )
}
