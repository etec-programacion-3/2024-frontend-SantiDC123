
import './Footer.css'
export const Footer = () => {
    return (
        <footer>
            <div className="contenedor">
                <div className="info-footer">
                    <div className='info-estudiante'>
                        <h4>Datos del estudiante</h4>
                        <ul>
                            <li>Santiago Di Cesare</li>
                            <li>s.dicesare@alumno.etec.um.edu.ar</li>
                            <li>Programación 2025</li>
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
