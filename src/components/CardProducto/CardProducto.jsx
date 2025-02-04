import { Link } from "react-router"
import { useUserContext } from "../../context/UserContext"
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";


export const CardProducto = ({titulo,portada,descripcion,precio,stock}) => {  
    const {estaAutenticado} = useUserContext();
    const {addItem} = useCartContext();
    const [cantidad, setCantidad] = useState(1);

    const addItemConfirm = () => {
        addItem({titulo,portada,descripcion,precio,stock,cantidad})
        alert('producto agregado, cantidad: ' + cantidad)
    }
    return (
        <article className="producto">
            
            <img src={`/productos/${portada}`} alt="" className="img-producto" />
            <h4 className="titulo-producto">{titulo}</h4>
            <p className="descripcion-producto">{descripcion}</p>
            <span className='precio-producto'>${precio}</span>
            <input onChange={ event => setCantidad(event.target.value)} type="number" max={stock} defaultValue={1} min={1} className="input-cantidad" />
            {
                estaAutenticado
                ?
                <button className='btn-agregar-producto' onClick={addItemConfirm}>Agregar al carrito</button>
                :
                <Link to="/login" className='btn-agregar-producto'>Agregar al carrito</Link>
            }
     
            
        </article>
    )
}
