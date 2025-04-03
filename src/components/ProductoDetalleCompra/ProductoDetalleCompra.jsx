import { SERVER_URL } from "../../utils/utils"


export const ProductoDetalleCompra = ({ portada, titulo, precio, cantidad }) => {


    return (
        <article className="detalle-producto">
            <img src={SERVER_URL + portada} alt="Foto portada producto" />
            <h5>{titulo}</h5>
            <p>${precio}</p>
            <p>{cantidad}</p>
            <p>${precio * cantidad}</p>
        </article>
    )
}
