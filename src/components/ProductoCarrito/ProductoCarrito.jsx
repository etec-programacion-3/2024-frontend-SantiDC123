

export const ProductoCarrito = ({id,titulo,imagen,precio,cantidad,subtotal}) => {
    return (
        <article className="producto-carrito">
            <img src={`/productos/${imagen}`} alt="producto carrito" />
            <h3>{titulo}</h3>
            <div className="contenedor-cantidad">
                <button className='btnDisminuirCantidad'>-</button>
                <span className='spanCantidadProducto'>{cantidad}</span>
                <button className='btnAumentarCantidad'>+</button>
            </div>
            <p className='precio-producto-carrito'>${precio}</p>
            <p className='subtotal-producto-carrito'>${subtotal}</p>
            <div className="contenedor-btn">
                <button className='btn-quitar-producto'>Quitar</button>
            </div>
        </article>
    )
}
