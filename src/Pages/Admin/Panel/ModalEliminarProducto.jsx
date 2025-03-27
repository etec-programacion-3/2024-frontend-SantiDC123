import { useEffect } from "react";
import { useProductContext } from "../../../context/ProductContext";

export const ModalEliminarProducto = ({ setShowModal, id }) => {
    const { eliminarProducto, error, limpiarError, productoEliminado } = useProductContext();

    const handleClickEliminar = (id) => {
        eliminarProducto(id)
    }

    const ocultarModal = () => {
        setShowModal(false)
        limpiarError()
    }

    useEffect(() => {
        if(productoEliminado){
            ocultarModal();
        }
    }, [productoEliminado])
    return (
        <div id="modalEliminarProducto">
            <div className="contenedor-modal">
                <div>
                    <button className="btn-cerrar-modal" onClick={ocultarModal}>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>
                    </button>
                </div>
                <div className="contenido-modal">

                    <h3>¿Está seguro que desea eliminar el producto seleccionado?</h3>
                    {
                        (error && error.length > 0) &&
                        <p className="text-error">* {error}</p>
                    }
                    <div className="contenedor-btn-footer">
                        <button onClick={() => handleClickEliminar(id)} className="btn-confirm-eliminar">Eliminar</button>
                        <button onClick={ocultarModal} className="btn-cancelar-eliminar">Cancelar</button>
                    </div>




                </div>
            </div>
        </div>
    )
}
