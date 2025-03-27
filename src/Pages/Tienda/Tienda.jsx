import React, { useEffect, useState } from 'react'
import './Tienda.css';
import { CardProducto } from '../../components/CardProducto/CardProducto';
import { useCartContext } from '../../context/CartContext';
import { useProductContext } from '../../context/ProductContext';


export const Tienda = () => {
    const { cart } = useCartContext();
    const { listarProductos, listadoProductos } = useProductContext()


    useEffect(() => {
        listarProductos();
    }, [])


    return (
        <section className='pagina-tienda'>
            <h2>Nuestra tienda</h2>


            <div className="contenedor contenedor-productos">

                {
                    (listadoProductos && listadoProductos.length > 0)
                        ?
                        listadoProductos.map((producto) => {
                            let mostrarStock = producto.stock > 0;
                            let stockDisponible = producto.stock
                            if (cart.length > 0) {
                                let prodEncontrado = cart.find((prodCart) => prodCart.product == producto._id)

                                if (prodEncontrado) {
                                    if (prodEncontrado.cantidad >= producto.stock) {
                                        mostrarStock = false;
                                    } else {
                                        stockDisponible = stockDisponible - prodEncontrado.cantidad;
                                    }
                                }
                            }

                            if (mostrarStock) {
                                return (
                                    <CardProducto key={producto._id} id={producto._id} titulo={producto.titulo} portada={producto.portada} descripcion={producto.descripcion} precio={producto.precio} stock={producto.stock} stockDisponible={stockDisponible} mostrarStock={mostrarStock} />
                                );
                            }

                        })

                        :
                        <p>Cargando..</p>

                }

            </div>
        </section>
    )
}
