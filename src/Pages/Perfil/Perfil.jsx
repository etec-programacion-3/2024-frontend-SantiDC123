import "./Perfil.css"

export const Perfil = () => {
  return (
    <section className="seccion-perfil">
      <div className="contenedor">
        <h2>Perfil de usuario</h2>
        <div className="data-usuario">
          <p>Nombre: Juan Perez</p>
          <p>Email: juan@gmail.com</p>
        </div>
        <hr />
        <h2>Mis compras</h2>
        <div className="contenedor-compras">
          <div className="tabla-carrito">
            <div className="cabecera-tabla">
              <div className="cabecera-col">Fecha</div>
              <div className="cabecera-col">Total</div>
              <div className="cabecera-col">Detalle</div>
            </div>

            <div className="cuerpo-tabla">

              <article className="producto-carrito">
                <p>10/05/2024</p>
                <p>$230000</p>
                <div className="contenedor-btn">
                  <button>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                      <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                  </button>
                </div>
              </article>

              <article className="producto-carrito">
                <p>10/05/2024</p>
                <p>$230000</p>
                <div className="contenedor-btn">
                  <button>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                      <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                  </button>
                </div>
              </article>

            </div>
          </div>
        </div>
      </div>


    </section>
  )
}
