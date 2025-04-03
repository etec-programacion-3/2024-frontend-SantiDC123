import { useEffect, useState } from "react"
import "./Panel.css"
import { ProductoPanel } from "./ProductoPanel"
import { Link } from "react-router"
import { useProductContext } from "../../../context/ProductContext"


export const Panel = () => {
    const { listarProductosAdmin, listadoProductosAdmin } = useProductContext()

    useEffect(() => {
        listarProductosAdmin();
    }, [])


    return (

        <section className="seccion-panel">
            <h2>Panel de administración</h2>


            <div className="contenedor">
                <Link to="producto/nuevo" className="btn-nuevo-prod">Nuevo Producto</Link>
                <div className="tabla-panel">
                    <div className="cabecera-tabla">
                        <div className="cabecera-col">Producto</div>
                        <div className="cabecera-col">Título</div>
                        <div className="cabecera-col">Precio</div>
                        <div className="cabecera-col">Stock</div>
                        <div className="cabecera-col">Estado</div>
                        <div className="cabecera-col">Acción</div>
                    </div>
                    <div className="cuerpo-tabla">

                        {


                            listadoProductosAdmin.map((producto) => {
                                return <ProductoPanel
                                    key={producto._id} id={producto._id} titulo={producto.titulo} portada={producto.portada} precio={producto.precio} stock={producto.stock} activo={producto.activo} />
                            })

                        }
                    </div>
                </div>
            </div>

        </section>
    )
}
