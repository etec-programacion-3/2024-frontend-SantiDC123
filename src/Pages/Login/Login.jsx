import { useEffect, useState } from 'react'
import './Login.css'
import { useUserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router'

export const Login = () => {
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const { loginUsuario, estaAutenticado, error: errorLogin } = useUserContext();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // enviar la informacion al servidor.
    loginUsuario(formData);
  }

   useEffect(() => {
      if(estaAutenticado){
        navigate('/')
      }
    },[estaAutenticado])

  return (
    <section className="seccion-login">
      <h2>Login</h2>
      <hr />
      <div className="contenedor">

        <form onSubmit={(e) => handleSubmit(e)} className='formulario'>

          <div>
            <label htmlFor="">Email</label>
            <input onChange={(e) => handleChange(e)} name='email' type="email" required />
          </div>
          <div>
            <label htmlFor="">Contraseña</label>
            <input onChange={(e) => handleChange(e)} name='password' type="password" required />
          </div>

          <div className='contenedor-errores'>
            {
             errorLogin &&errorLogin.length > 0
                ? <p>Error: {errorLogin}</p>
                : ''
            }
          </div>
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </section>
  )
}
