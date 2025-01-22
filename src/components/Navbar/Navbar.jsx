import './Navbar.css'

export const Navbar = () => {
    return (
        <header className='main-header'>
            <div className="contenedor">
                <img src="/logo.png" alt="" className="logo-img" />

                <nav className='menu'>
                    <ul className='listado-menu'>
                        <li className='item-menu'><a className='enlace-menu' href="#">Home</a></li>
                        <li className='item-menu'><a className='enlace-menu' href="#">Registro</a></li>
                        <li className='item-menu'><a className='enlace-menu' href="#">Login</a></li>
                        <li className='item-menu'><a className='enlace-menu' href="#">Carrito</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}
