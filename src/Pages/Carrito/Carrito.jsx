import './Carrito.css'
export const Carrito = () => {
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
                        <article className="producto-carrito">
                            <img src="/productos/teclado.png" alt="producto carrito" />
                            <h3>Título producto</h3>
                            <div className="contenedor-cantidad">
                                <button className='btnDisminuirCantidad'>-</button>
                                <span className='spanCantidadProducto'>2</span>
                                <button className='btnAumentarCantidad'>+</button>
                            </div>
                            <p className='precio-producto-carrito'>$15000</p>
                            <p className='subtotal-producto-carrito'>$30000</p>
                            <div className="contenedor-btn">
                                <button className='btn-quitar-producto'>Quitar</button>
                            </div>
                        </article>

                        <article className="producto-carrito">
                            <img src="/productos/silla.png" alt="" />
                            <h3>Título producto</h3>
                            <div className="contenedor-cantidad">
                                <button className='btnDisminuirCantidad'>-</button>
                                <span className='spanCantidadProducto'>2</span>
                                <button className='btnAumentarCantidad'>+</button>
                            </div>
                            <p className='precio-producto-carrito'>$15000</p>
                            <p className='subtotal-producto-carrito'>$30000</p>
                            <div className="contenedor-btn">
                                <button className='btn-quitar-producto'>Quitar</button>
                            </div>
                        </article>

                        <article className="producto-carrito">
                            <img src="/productos/teclado.png" alt="producto carrito" />
                            <h3>Título producto</h3>
                            <div className="contenedor-cantidad">
                                <button className='btnDisminuirCantidad'>-</button>
                                <span className='spanCantidadProducto'>2</span>
                                <button className='btnAumentarCantidad'>+</button>
                            </div>
                            <p className='precio-producto-carrito'>$15000</p>
                            <p className='subtotal-producto-carrito'>$30000</p>
                            <div className="contenedor-btn">
                                <button className='btn-quitar-producto'>Quitar</button>
                            </div>
                        </article>
                    </div>
                    <div className="pie-tabla">
                        <p className='parrafo-total'>Total de compra: <span id='spanTotalCompra'>$350000</span></p>
                        <button className='btn-confirmar-compra'>Confirmar compra</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
