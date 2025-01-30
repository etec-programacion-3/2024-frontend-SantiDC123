

export const CardProducto = ({titulo,portada,descripcion,precio}) => {  
    
    return (
        <article className="producto">
            
            <img src={`/productos/${portada}`} alt="" className="img-producto" />
            <h4 className="titulo-producto">{titulo}</h4>
            <p className="descripcion-producto">{descripcion}</p>
            <span className='precio-producto'>${precio}</span>
            <button className='btn-agregar-producto'>Agregar al carrito</button>
            
        </article>
    )
}
