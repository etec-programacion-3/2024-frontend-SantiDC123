import './Login.css'

export const Login = () => {
  return (
    <section className="seccion-login">
      <h2>Login</h2>
      <hr />
      <div className="contenedor">

        <form className='formulario'>
        
          <div>
            <label htmlFor="">Email</label>
            <input type="email" required />
          </div>
          <div>
            <label htmlFor="">Contraseña</label>
            <input type="password"  required />
          </div>
         

          <button type="submit">Ingresar</button>
        </form>
      </div>
    </section>
  )
}
