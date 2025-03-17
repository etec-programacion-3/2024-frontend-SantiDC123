import React, { useEffect, useState } from 'react'
import './Tienda.css';
import { CardProducto } from '../../components/CardProducto/CardProducto';
import { ListadoFiltrosCategorias } from '../../components/ListadoFiltrosCategorias/ListadoFiltrosCategorias';
import { listarProductos } from '../../api/product';
import { useCartContext } from '../../context/CartContext';


export const Tienda = () => {
    const { cart } = useCartContext();
    const [listadoProductos, setListadoProductos] = useState([])



    useEffect(() => {
        async function listar() {
            const listadoProductosAPI = await listarProductos();
            setListadoProductos(listadoProductosAPI.data)
        }
        listar();
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
                                    }else{
                                        stockDisponible = stockDisponible - prodEncontrado.cantidad;
                                    }
                                }
                            }

                            if(mostrarStock){
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
