import { Link } from "react-router"
import { useUserContext } from "../../context/UserContext"
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const CardProducto = ({ id, titulo, portada, descripcion, precio, stock }) => {
    const { estaAutenticado } = useUserContext();
    const { addItem } = useCartContext();
    const [cantidad, setCantidad] = useState(1);
    const [stockDisponible, setStockDisponible] = useState(stock)



    const addItemConfirm = () => {
        if (stockDisponible > 0) {
            addItem({ id, cantidad, precio, stock })
            setStockDisponible(stockDisponible - cantidad)
            Toastify({
                text: "Producto agregado",
                duration: 3000,
                style: {
                    background: "royalblue",
                    fontSize: "14px",
                    padding: "6px 20px"
                },
                offset: {
                    x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                    y: 70 // vertical axis - can be a number or a string indicating unity. eg: '2em'
                },
            }).showToast();
        }
        
    }
    return (
        <article className="producto">

            <img src={`/productos/${portada}`} alt="" className="img-producto" />
            <h4 className="titulo-producto">{titulo}</h4>
            <p className="descripcion-producto">{descripcion}</p>
            <span className='precio-producto'>${precio}</span>
            {
                stockDisponible > 0
                    ?
                    <>
                        
                        <input onChange={event => setCantidad(parseInt(event.target.value))} type="number" max={stock} defaultValue={1} min={1} className="input-cantidad" />
                        {estaAutenticado
                            ?
                            <button className='btn-agregar-producto' onClick={addItemConfirm}>Agregar al carrito</button>
                            :
                            <Link to="/login" className='btn-agregar-producto'>Agregar al carrito</Link>
                        }
                    </>
                    :
                    <p>Sin stock disponible</p>
            }
           


        </article>
    )
}
