import { useEffect, useState } from 'react'
import { ProductoCarrito } from '../../components/ProductoCarrito/ProductoCarrito'
import { useCartContext } from '../../context/CartContext'
import './Carrito.css'
import { useUserContext } from '../../context/UserContext'
import { Link, useNavigate } from 'react-router'
import { useSaleContext } from '../../context/SaleContext'

export const Carrito = () => {
    const {cart,limpiarCarrito, loadingCart, productosCarrito, listarProductosCarrito, totalCarrito } = useCartContext();
    const { estaAutenticado, loadingUser } = useUserContext();
    const {loadingSale, registrarVenta} = useSaleContext();

    const navigate = useNavigate();
    useEffect(() => {
        if (!loadingUser && !estaAutenticado) {
            navigate('/login')
        }
        listarProductosCarrito();

    }, [])

    const processSale = (venta) => {
        registrarVenta(venta);
        limpiarCarrito();
        navigate('/thanks')
    }

    return (
        <section className="seccion-carrito">
            <h2>Carrito de Compras</h2>
            <hr />
            <div className="contenedor">
                {
                    loadingCart
                        ?
                        <p>Cargando..</p>
                        :

                        (productosCarrito.length > 0)
                            ?
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
                                            return <ProductoCarrito key={producto.id} id={producto.id} titulo={producto.titulo} portada={producto.portada} cantidad={producto.cantidad} precio={producto.precio} stock={producto.stock} />
                                        })

                                    }
                                </div>
                                <div className="pie-tabla">
                                    <p className='parrafo-total'>Total de compra: <span id='spanTotalCompra'>${totalCarrito}</span></p>
                                    <button onClick={e => processSale({total:totalCarrito,detalle:cart})} className='btn-confirmar-compra'>Confirmar compra</button>
                                </div>
                            </div>
                            :
                            
                            <div className="alert-carrito">
                                <h4>¡Su carrito de compras está vacío!</h4>
                                <p>Visite nuestra <Link to="/">tienda</Link> para que pueda agregar productos a su carrito.</p>
                            </div>




                }
            </div>
        </section>
    )
}
