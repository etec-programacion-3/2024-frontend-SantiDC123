

export const CardProducto = ({titulo,portada,descripcion,precio,stock}) => {  
    
    return (
        <article className="producto">
            
            <img src={`/productos/${portada}`} alt="" className="img-producto" />
            <h4 className="titulo-producto">{titulo}</h4>
            <p className="descripcion-producto">{descripcion}</p>
            <span className='precio-producto'>${precio}</span>
            <input type="number" max={stock} defaultValue={1} min={1} className="input-cantidad" />
            <button className='btn-agregar-producto'>Agregar al carrito</button>
            
        </article>
    )
}
