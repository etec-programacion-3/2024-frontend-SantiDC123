import React from 'react'
import { Link } from 'react-router'
import './ThanksSale.css'

export const ThanksSale = () => {
  return (
    <section className="seccion-agradecimiento">
      <div className="contenedor">
        <div className="contenedor-textos">
          <h2>¡Compra finalizada exitosamente!</h2>
          <p>Gracias por su compra, a la brevedad podrá ver reflejada la misma en la página de su <Link to="/perfil" className='enlace-perfil'>perfil</Link>.</p>
        </div>

      </div>

    </section>
  )
}