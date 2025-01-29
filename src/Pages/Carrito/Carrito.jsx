import { ProductoCarrito } from '../../components/ProductoCarrito/ProductoCarrito'
import './Carrito.css'

const carrito = [
    {id:2010,imagen:"teclado.png", titulo:"Teclado Gamer", precio:22000, cantidad:2, subtotal:44000 },
    {id:2023,imagen:"mouse.png", titulo:"Mouse Gamer", precio:12000, cantidad:3, subtotal:36000 },
    {id:3310,imagen:"silla.png", titulo:"Silla Gamer", precio:25000, cantidad:1, subtotal:25000},
   ]
export const Carrito = () => {
    
    return (
        <section className="seccion-carrito">
            <h2>Carrito de Compras</h2>
            <hr />
            <div className="contenedor">
                <div className="tabla-carrito">
                    <div className="cabecera-tabla">
                        <div className="cabecera-col">Producto</div>
                        <div className="cabecera-col">Título</div>
                        <div className="cabecera-col">Cantidad</div>
                        <div className="cabecera-col">Precio</div>
                        <div className="cabecera-col">Subtotal</div>
                        <div className="cabecera-col">Acción</div>
                    </div>
                    <div className="cuerpo-tabla">

                        {
                            carrito.map((producto) => {
                                return <ProductoCarrito id={producto.id} titulo={producto.titulo} imagen={producto.imagen} cantidad={producto.cantidad} precio={producto.precio} subtotal={producto.subtotal}    />  
                            })
                        }

                    </div>
                    <div className="pie-tabla">
                        <p className='parrafo-total'>Total de compra: <span id='spanTotalCompra'>$350000</span></p>
                        <button className='btn-confirmar-compra'>Confirmar compra</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
