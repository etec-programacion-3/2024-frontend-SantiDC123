import { useState } from "react";
import { useCartContext } from "../../context/CartContext"


export const ProductoCarrito = ({id,titulo,portada,precio,cantidad,stock}) => {
    const {modificarCantidadProducto} = useCartContext();
    const [cantidadProd, setCantidadProd] = useState(cantidad);

    const aumentarCantidad = (idProd) =>{
        if(cantidadProd+1 <= stock){
            setCantidadProd(cantidadProd+1);
            modificarCantidadProducto(idProd,cantidadProd+1);
        }
   
    }
    
    const disminuirCantidad = (idProd) =>{
        if(cantidadProd-1 > 0){
            setCantidadProd(cantidadProd-1);
            modificarCantidadProducto(idProd,cantidadProd-1);
        }
        
    }
    
    const {quitarProductoCarrito} = useCartContext();
    
    const handleClick = (item) => {
        quitarProductoCarrito(item);
    }
    return (
        <article className="producto-carrito">
            <img src={`/productos/${portada}`} alt="producto carrito" />
            <h3>{titulo}</h3>
            <div className="contenedor-cantidad">
                <button onClick={() => disminuirCantidad(id)} className='btnDisminuirCantidad'>-</button>
                <span className='spanCantidadProducto'>{cantidadProd}</span>
                <button onClick={() => aumentarCantidad(id)} className='btnAumentarCantidad'>+</button>
            </div>
            <p className='precio-producto-carrito'>${precio}</p>
            <p className='subtotal-producto-carrito'>${precio * cantidadProd}</p>
            <div className="contenedor-btn">
                <button onClick={() => handleClick({id,precio,cantidadProd})} className='btn-quitar-producto'>Quitar</button>
            </div>
        </article>
    )
}
