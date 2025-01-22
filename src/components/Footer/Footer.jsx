
import './Footer.css'
export const Footer = () => {
    return (
        <footer>
            <div className="contenedor">
                <div className="info-footer">
                    <div className='info-estudiante'>
                        <h4>Datos del estudiante</h4>
                        <ul>
                            <li>Juan Perez</li>
                            <li>juan@gmail.com</li>
                            <li>Programación 2024</li>
                        </ul>
                    </div>
                    <div className='info-colegio'>
                        <img className='logo-colegio' src="/logo-colegio.png" alt="logo colegio" />
                    </div>
                </div>
            </div>
            <p>Copyright © 2025 | Todos los derechos reservados.</p>
        </footer>
    )
}
