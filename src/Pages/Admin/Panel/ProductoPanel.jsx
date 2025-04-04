import { Link } from 'react-router'
import { SERVER_URL } from '../../../utils/utils'

import { ModalEliminarProducto } from './ModalEliminarProducto';
import { useState } from 'react';
import { useProductContext } from '../../../context/ProductContext';
import { ModalStockProducto } from './ModalStockProducto';

export const ProductoPanel = ({ id, titulo, portada, precio, stock, activo }) => {
    const [showModal, setShowModal] = useState(false)
    const [showModalStock, setShowModalStock] = useState(false)
    const { modificarEstadoActivo } = useProductContext();
    const handleClickEstado = (id) => {
        console.log('estado modificado');
        modificarEstadoActivo(id);
    }
    return (
        <>
            <article className="producto-panel">
                <img className='img-producto-panel' src={`${SERVER_URL + portada}`} alt="producto panel" />
                <h3>{titulo}</h3>
                <p className='precio-producto-panel'>${precio}</p>
                <p className='stock-producto-panel'>
                    <span>{stock}</span>


                    <svg onClick={() => setShowModalStock(true)} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 3v4a1 1 0 0 1-1 1H5m4 10v-2m3 2v-6m3 6v-3m4-11v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z" />
                    </svg>


                </p>
                <p className='estado-producto-panel'>
                    {activo ? <span className='estado-activo'>Activo</span> : <span className='estado-deshabilitado'>Deshabiltado</span>}
                    <svg onClick={() => handleClickEstado(id)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3" />
                    </svg>

                </p>
                <div className="contenedor-btn">
                    <button className='btn-quitar-producto' onClick={() => setShowModal(true)} >

                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                        </svg>

                    </button>


                    <Link to={`producto/modificar/${id}`} className='btn-modificar-producto'>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28" />
                        </svg>

                    </Link>
                </div>
            </article>
            {
                (showModal && !showModalStock) &&
                <ModalEliminarProducto setShowModal={setShowModal} id={id} />
            }

            {
                (showModalStock && !showModal) &&
                <ModalStockProducto setShowModalStock={setShowModalStock} id={id} />
            }
        </>
    )
}
