import './Registro.css'

export const Registro = () => {
  return (
    <section className="seccion-registro">
      <h2>Formulario de Registro</h2>
      <hr />
      <div className="contenedor">

        <form className='formulario'>
          <div>
            <label htmlFor="">Nombre</label>
            <input type="text" required />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" required />
          </div>
          <div>
            <label htmlFor="">Contraseña</label>
            <input type="password"  required />
          </div>
          <div>
            <label htmlFor="">Confirmar contraseña</label>
            <input type="password"  required />
          </div>

          <button type="submit">Registrarme</button>
        </form>
      </div>
    </section>
  )
}
