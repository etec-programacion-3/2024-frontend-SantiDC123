import { useCartContext } from "../../context/CartContext"


export const ProductoCarrito = ({id,titulo,portada,precio,cantidad}) => {
    const {quitarProductoCarrito} = useCartContext();
    const handleClick = (item) => {
        alert('se elimino producto con ID: ' + id)
        quitarProductoCarrito(item);
    }
    return (
        <article className="producto-carrito">
            <img src={`/productos/${portada}`} alt="producto carrito" />
            <h3>{titulo}</h3>
            <div className="contenedor-cantidad">
                <button className='btnDisminuirCantidad'>-</button>
                <span className='spanCantidadProducto'>{cantidad}</span>
                <button className='btnAumentarCantidad'>+</button>
            </div>
            <p className='precio-producto-carrito'>${precio}</p>
            <p className='subtotal-producto-carrito'>${precio * cantidad}</p>
            <div className="contenedor-btn">
                <button onClick={() => handleClick({id,precio,cantidad})} className='btn-quitar-producto'>Quitar</button>
            </div>
        </article>
    )
}
