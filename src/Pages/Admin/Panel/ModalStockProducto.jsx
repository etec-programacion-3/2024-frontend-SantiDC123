import { useEffect } from "react";
import { useProductContext } from "../../../context/ProductContext";

export const ModalStockProducto = ({ setShowModalStock, id }) => {
    const { eliminarProducto, error, limpiarError, productoEliminado } = useProductContext();

    const handleClickEliminar = (id) => {
        eliminarProducto(id)
    }

    const ocultarModal = () => {
        setShowModalStock(false)
        limpiarError()
    }

    useEffect(() => {
        if (productoEliminado) {
            ocultarModal();
        }
    }, [productoEliminado])
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
                    <h4>PC gamer</h4>
                    <hr />
                    {
                        (error && error.length > 0) &&
                        <p className="text-error">* {error}</p>
                    }
                    <div className="tabla-panel">
                        <div className="cabecera-tabla">
                            <div className="cabecera-col">Fecha</div>
                            <div className="cabecera-col">Stock Previo</div>
                            <div className="cabecera-col">Stock Actual</div>
                            <div className="cabecera-col">Descripción</div>
                        </div>
                        <div className="cuerpo-tabla">

                            <article className="producto-panel">
                                <p>20/05/2025</p>
                                <p>5</p>
                                <p>9</p>
                                <p>Stock modificado desde el panel de administración</p>
                            </article>

                            <article className="producto-panel">
                                <p>15/08/2025</p>
                                <p>0</p>
                                <p>6</p>
                                <p>Stock modificado desde el panel de administración</p>
                            </article>

                            <article className="producto-panel">
                                <p>11/08/2025</p>
                                <p>5</p>
                                <p>2</p>
                                <p>Stock modificado por una venta realizada </p>
                            </article>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}
