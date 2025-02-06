import { useEffect, useState } from 'react'
import { ProductoCarrito } from '../../components/ProductoCarrito/ProductoCarrito'
import { useCartContext } from '../../context/CartContext'
import './Carrito.css'

export const Carrito = () => {
    const {cart,productosCarrito,listarProductosCarrito,totalCarrito} = useCartContext();
    
    
    useEffect(() => {
        listarProductosCarrito();
        
    }, [])

    return (
        <section className="seccion-carrito">
            <h2>Carrito de Compras</h2>
            <hr />
            <div className="contenedor">
                <div className="tabla-carrito">
                    <div className="cabecera-tabla">
                        <div className="cabecera-col">Producto</div>
                        <div className="cabecera-col">Título</div>
                        <div className="cabecera-col">Cantidad</div>
                        <div className="cabecera-col">Precio</div>
                        <div className="cabecera-col">Subtotal</div>
                        <div className="cabecera-col">Acción</div>
                    </div>
                    <div className="cuerpo-tabla">

                        {
                            productosCarrito.map((producto) => {
                                return <ProductoCarrito key={producto.id} id={producto.id} titulo={producto.titulo} portada={producto.portada} cantidad={producto.cantidad} precio={producto.precio}   />  
                            })
                        }
                    </div>
                    <div className="pie-tabla">
                        <p className='parrafo-total'>Total de compra: <span id='spanTotalCompra'>${ totalCarrito }</span></p>
                        <button className='btn-confirmar-compra'>Confirmar compra</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
