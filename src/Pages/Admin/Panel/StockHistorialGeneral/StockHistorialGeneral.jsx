import { useEffect } from 'react';
import { useStockContext } from '../../../../context/StockContext'
import './StockHistorialGeneral.css'
import { ItemStockGeneral } from './ItemStockGeneral';
export const StockHistorialGeneral = () => {
    const { listarHistorialStockGeneral, listadoHistorialStockGeneral, loadingStock } = useStockContext();
    useEffect(() => {
        listarHistorialStockGeneral();
    }, []);
    return (
        <section className="seccion-stock-historial">
            <div className="contenedor">
                <h2>Movimientos de stock general</h2>
                <hr />

                <div className="tabla-panel">
                    <div className="cabecera-tabla">
                        <div className="cabecera-col">Producto</div>
                        <div className="cabecera-col">Fecha</div>
                        <div className="cabecera-col">Stock Previo</div>
                        <div className="cabecera-col">Stock Resultante</div>
                        <div className="cabecera-col">Descripción</div>
                    </div>
                    <div className="cuerpo-tabla">

                        {
                            loadingStock ?
                                <p>Cargando..</p>
                                :
                                listadoHistorialStockGeneral.length > 0 && listadoHistorialStockGeneral.map((item) => {
                                    
                                    
                                    return ( item.producto &&
                                        <ItemStockGeneral key={item._id} tituloProd={item.producto.titulo} fecha={item.fecha_modificacion} stockPrevio={item.valor_previo} stockModificado={item.valor_actual} descripcion={item.descripcion} />
                                    )
                                })
                        }

                    </div>
                </div>
            </div>

        </section>
    )
}
