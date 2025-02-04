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

    console.log(cart)

    return (
        <section className='pagina-tienda'>
            <h2>Nuestra tienda</h2>

            <div className="contenedor-categorias">
                <ListadoFiltrosCategorias />
            </div>
            <div className="contenedor contenedor-productos">

                {
                    (listadoProductos && listadoProductos.length > 0)
                        ?
                        listadoProductos.map((producto) => {
                            return (
                                <CardProducto titulo={producto.titulo} portada={producto.portada} descripcion={producto.descripcion} precio={producto.precio} stock={producto.stock} />
                            );
                        })

                        :
                        <p>Cargando..</p>

                }



                {
                    cart.length > 0 &&
                    <>
                        <p>Productos del carrito:</p>
                        <ul>
                        {cart.map((item) => {
                            return <li>{item.titulo}</li>
                        })}
                        </ul>
                        
                    </>
                }
            </div>
        </section>
    )
}
