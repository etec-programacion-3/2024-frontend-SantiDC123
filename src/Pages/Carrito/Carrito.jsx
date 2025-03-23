import { useEffect, useState } from 'react'
import { ProductoCarrito } from '../../components/ProductoCarrito/ProductoCarrito'
import { useCartContext } from '../../context/CartContext'
import './Carrito.css'
import { useUserContext } from '../../context/UserContext'
import { Link, useNavigate } from 'react-router'
import { useSaleContext } from '../../context/SaleContext'

export const Carrito = () => {
    const { cart, limpiarCarrito, loadingCart, productosCarrito, listarProductosCarrito, totalCarrito } = useCartContext();
    const { estaAutenticado, loadingUser } = useUserContext();
    const { registrarVenta, limpiarErrores, errorsSale, ventaProcesada, restablecerEstadoSale } = useSaleContext();

    const [showErrors, setShowErrors] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (!loadingUser && !estaAutenticado) {
            navigate('/login')
        }
        listarProductosCarrito();

    }, [cart])

    const processSale = async (venta) => {
        await registrarVenta(venta);
    }
    const ocultarErrores = () => {
        limpiarErrores();
        setShowErrors(false)
    }
    useEffect(() => {
        if (ventaProcesada) {
            limpiarCarrito();
            restablecerEstadoSale();
            navigate('/thanks')
        } else if (errorsSale.length > 0) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            setShowErrors(true)
            setTimeout(() => {
                setShowErrors(false)
            }, 43000)
        }
    }, [ventaProcesada, errorsSale])

    return (
        <section className="seccion-carrito">
            <h2>Carrito de Compras</h2>
            <hr />
            <div className="contenedor">

                <div className={`sale-errors-container ${showErrors && 'sale-errors-container--visible'}`}>
                    <div className="cabecera">
                        <h5>Ha ocurrido un error al intentar confirmar la compra, lo siguientes productos no poseen stock suficiente: </h5>
                        <button onClick={ocultarErrores}><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        </button>
                    </div>

                    {
                        errorsSale.map((error, i) => {
                            return (
                                <div className='sale-error'>
                                    <p key={i}>* {error.message}</p>
                                </div>

                            )
                        })
                    }
                </div>


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
                                    <button onClick={e => processSale({ total: totalCarrito, detalle: cart })} className='btn-confirmar-compra'>Confirmar compra</button>
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
