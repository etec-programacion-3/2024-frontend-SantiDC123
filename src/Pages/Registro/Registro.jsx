import { useEffect, useState } from 'react'
import './Registro.css'
import { useUserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router'

export const Registro = () => {
  const navigate = useNavigate()
  const { registrarUsuario, estaAutenticado, error: errorRegistro } = useUserContext()
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    passwordConfirm: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // enviar la informaciñon al servidor.
    console.log(formData);
    registrarUsuario(formData);

  }

  useEffect(() => {
    if(estaAutenticado){
      navigate('/')
    }
  },[estaAutenticado])

  return (
    <section className="seccion-registro">
      <h2>Formulario de Registro</h2>
      <hr />
      <div className="contenedor">

        <form onSubmit={(e) => handleSubmit(e)} className='formulario'>
          <div>
            <label htmlFor="">Nombre</label>
            <input name='nombre' onChange={(e) => handleChange(e)} type="text" required />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input name='email' onChange={(e) => handleChange(e)} type="email" required />
          </div>
          <div>
            <label htmlFor="">Contraseña</label>
            <input name='password' onChange={(e) => handleChange(e)} type="password" required />
          </div>
          <div>
            <label htmlFor="">Confirmar contraseña</label>
            <input name='passwordConfirm' onChange={(e) => handleChange(e)} type="password" required />
          </div>

          <div className='contenedor-errores'>
            {
              errorRegistro && errorRegistro.length > 0
                ? <p> {errorRegistro}</p>
                : ''
            }
          </div>
          <button type="submit">Registrarme</button>
        </form>
      </div>
    </section>
  )
}
