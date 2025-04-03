import { useEffect, useState } from "react"
import { DatosCompra } from "../../components/DatosCompra/DatosCompra"
import "./Perfil.css"
import { useSaleContext } from "../../context/SaleContext"
import { ProductoDetalleCompra } from "../../components/ProductoDetalleCompra/ProductoDetalleCompra"

export const Perfil = () => {

  const { listarDetalleVenta, listadoComprasCliente, listarComprasCliente } = useSaleContext();

  const [showModal, setShowModal] = useState(false);
  const [detalleCompra, setDetalleCompra] = useState([]);

  const mostrarDetalleCompra = async (id) => {
    const detalle = await listarDetalleVenta(id)
    console.log(detalle);

    setDetalleCompra(detalle)
    setShowModal(true);
  }

  useEffect(() => {
    listarComprasCliente();
  }, []);

  return (
    <>
      <section className="seccion-perfil">
        <div className="contenedor">
          <h2>Perfil de usuario</h2>
          <div className="data-usuario">



          </div>
          <hr />
          <h2>Mis compras</h2>

          {
            listadoComprasCliente.length > 0
              ?
              <div className="contenedor-compras">
                <div className="tabla-compra">
                  <div className="cabecera-tabla">
                    <div className="cabecera-col">Fecha</div>
                    <div className="cabecera-col">Total</div>
                    <div className="cabecera-col">Detalle</div>
                  </div>

                  <div className="cuerpo-tabla">

                    {
                      listadoComprasCliente.map(compra => {
                        return (
                          <DatosCompra key={compra._id} idCompra={compra._id} fecha={compra.fecha_venta} total={compra.total} mostrarDetalleCompra={mostrarDetalleCompra} />
                        )
                      })
                    }


                  </div>
                </div>
              </div>
              :
              <div className="msj-compras-vacio">
                <p>¡Ups! Parece que no tiene compras realizadas, visite nuestra tienda para ver nuestras ofertas.</p>
              </div>

          }



        </div>


      </section>


      {
        showModal &&
        <div className="modal-detalle-compra">

          <div className="modal-body">
            <button className="btn-cerrar-modal" onClick={() => setShowModal(false)}>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
              </svg>
            </button>
            <h2 className="titulo-modal">Detalle de su compra</h2>
            <div className="datos-productos-compra">
              <div className="datos-cabecera">
                <span className="datos-th">Producto</span>
                <span className="datos-th">Título</span>
                <span className="datos-th">Precio</span>
                <span className="datos-th">Cantidad</span>
                <span className="datos-th">Subtotal</span>
              </div>
              <div className="datos-body">
                {
                  detalleCompra.length > 0 &&
                  detalleCompra.map((detalle) => {
                    return <ProductoDetalleCompra key={detalle._id} cantidad={detalle.cantidad} titulo={detalle.product.titulo} precio={detalle.product.precio} portada={detalle.product.portada} />
                  })

                }
              </div>
            </div>


          </div>
        </div>

      }

    </>
  )
}
