

export const ProductoDetalleCompra = ({portada, titulo,precio,cantidad}) => {

    
    return (
        <article className="detalle-producto">
            <img src={`/productos/${portada}`} alt="" />
            <h5>{titulo}</h5>
            <p>${precio}</p>
            <p>{cantidad}</p>
            <p>${precio * cantidad}</p>
        </article>
    )
}
