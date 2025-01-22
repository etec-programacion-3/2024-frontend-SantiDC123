

export const CardProducto = (props) => {  
    
    return (
        <article className="producto">
            
            <img src={`/productos/${props.imagen}`} alt="" className="img-producto" />
            <h4 className="titulo-producto">{props.titulo}</h4>
            <p className="descripcion-producto">{props.descripcion}</p>
            <span className='precio-producto'>${props.precio}</span>
            <button className='btn-agregar-producto'>Agregar al carrito</button>
            
        </article>
    )
}
