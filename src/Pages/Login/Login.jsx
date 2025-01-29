import { useState } from 'react'
import './Login.css'

export const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // enviar la informaciñon al servidor.
    console.log(formData);
  }
  return (
    <section className="seccion-login">
      <h2>Login</h2>
      <hr />
      <div className="contenedor">

        <form onSubmit={(e) => handleSubmit(e)}  className='formulario'>

          <div>
            <label htmlFor="">Email</label>
            <input onChange={(e) => handleChange(e)} name='email' type="email" required />
          </div>
          <div>
            <label htmlFor="">Contraseña</label>
            <input onChange={(e) => handleChange(e)} name='password' type="password" required />
          </div>


          <button type="submit">Ingresar</button>
        </form>
      </div>
    </section>
  )
}
