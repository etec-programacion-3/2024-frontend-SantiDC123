import { Link } from 'react-router'
import { SERVER_URL } from '../../../utils/utils'

import { ModalEliminarProducto } from './ModalEliminarProducto';
import { useState } from 'react';

export const ProductoPanel = ({ id, titulo, portada, precio, stock, activo }) => {
    const [showModal, setShowModal] = useState(false)
  
    return (
        <>
            <article className="producto-panel">
                <img className='img-producto-panel' src={`${SERVER_URL + portada}`} alt="producto panel" />
                <h3>{titulo}</h3>
                <p className='precio-producto-panel'>${precio}</p>
                <p className='subtotal-producto-panel'>{stock}</p>
                <p className='subtotal-producto-panel'>{activo ? 'Activo' : 'Inactivo'}</p>
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
                showModal &&
                <ModalEliminarProducto setShowModal={setShowModal} id={id}/>
            }

        </>
    )
}
