import { Link } from "react-router"
import { useUserContext } from "../../context/UserContext"
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const CardProducto = ({ id, titulo, portada, descripcion, precio, stockReal, stockDisponible, mostrarStock }) => {
    const { estaAutenticado } = useUserContext();
    const { addItem } = useCartContext();
    const [cantidad, setCantidad] = useState(1);



    const addItemConfirm = async () => {
        console.log(stockDisponible);
        if (stockDisponible >= cantidad) {
            await addItem({ id, cantidad, precio, stockReal })
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

        } else {
            Toastify({
                text: "Error: Ha superado el stock disponible.",
                duration: 3000,
                style: {
                    background: "red",
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
                mostrarStock 
                    ?
                    <>
                        <span className='precio-producto'>Unidades disponibles: {stockDisponible}</span>
                        <input onChange={event => setCantidad(parseInt(event.target.value))} type="number" max={stockDisponible} defaultValue={1} min={1} className="input-cantidad" />
                        {
                            estaAutenticado
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
