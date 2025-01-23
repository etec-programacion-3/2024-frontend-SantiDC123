import { Link } from 'react-router'
import './Navbar.css'

export const Navbar = () => {
    
    return (
        <header className='main-header'>
            <div className="contenedor">
                <img src="/logo.png" alt="" className="logo-img" />

                <nav className='menu'>
                    <ul className='listado-menu'>
                        <li className='item-menu'><Link to="/" className='enlace-menu'>Home</Link></li>
                        <li className='item-menu'><Link to="/registro" className='enlace-menu'>Registro</Link></li>
                        <li className='item-menu'><Link to="/login" className='enlace-menu'>Login</Link></li>
                        <li className='item-menu'><Link to="/carrito" className='enlace-menu'>Carrito</Link></li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}
