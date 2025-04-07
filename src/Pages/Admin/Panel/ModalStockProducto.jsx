import { useEffect } from "react";
import { useStockContext } from "../../../context/StockContext"
import { ProductoModalStock } from "./ProductoModalStock";

export const ModalStockProducto = ({ setShowModalStock, id, tituloProd }) => {

    const { listarHistorialStockPorProducto, listadoHistorialStock, loadingStock } = useStockContext();
    const ocultarModal = () => {
        setShowModalStock(false)
    }

    useEffect(() => {
        listarHistorialStockPorProducto(id)
        document.body.style.overflowY = 'hidden';
        return () => document.body.style.overflowY = 'auto';
    }, [id])


    return (
        <div id="modalStockProducto" className="ventana-modal ventana-modal-stock">
            <div className="contenedor-modal">
                <div>
                    <button className="btn-cerrar-modal" onClick={ocultarModal}>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>
                    </button>
                </div>
                <div className="contenido-modal">

                    <h3>Historial de stock</h3>
                    <h4 style={{ fontStyle: "italic" }}> {tituloProd} </h4>
                    <hr />
                    {
                        loadingStock
                            ?
                            <p>Cargando.. </p>
                            :
                            listadoHistorialStock && listadoHistorialStock.length > 0
                                ?
                                <div className="tabla-panel">
                                    <div className="cabecera-tabla">
                                        <div className="cabecera-col">Fecha</div>
                                        <div className="cabecera-col">Stock Previo</div>
                                        <div className="cabecera-col">Stock Resultante</div>
                                        <div className="cabecera-col">Descripción</div>
                                    </div>
                                    <div className="cuerpo-tabla">

                                        {

                                            listadoHistorialStock.map((item) => {
                                                return (
                                                    <ProductoModalStock key={item._id} fecha={item.fecha_modificacion} stockPrevio={item.valor_previo} stockModificado={item.valor_actual} descripcion={item.descripcion} />
                                                )
                                            })


                                        }

                                    </div>
                                </div>
                                :
                                <p>No hay registros de modificación de stock de este producto.</p>

                    }

                </div>
            </div>
        </div>
    )
}
