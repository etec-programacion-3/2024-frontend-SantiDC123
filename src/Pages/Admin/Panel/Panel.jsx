import { useEffect, useState } from "react"
import "./Panel.css"
import { ProductoPanel } from "./ProductoPanel"
import { listarProductos } from "../../../api/product"
import { useUserContext } from "../../../context/UserContext"
import { useNavigate } from "react-router"

export const Panel = () => {
    const [listadoProductos, setListadoProductos] = useState([])
    const { estaAutenticado, logoutUsuario, usuario } = useUserContext();
    const navigate = useNavigate();

    console.log(usuario);


    useEffect(() => {
        async function listar() {
            const listadoProductosAPI = await listarProductos();
            setListadoProductos(listadoProductosAPI.data)
        }
        listar();


        /*
        if (usuario.rol != 'admin') {
         //   navigate('/')
         console.log('no es admin');
         
        }
         */
    }, [])

    useEffect(() => {
        if (usuario && usuario.rol != 'admin') {
            navigate('/')
        }
    }, [usuario])


    return (

        <section className="seccion-panel">
            <h2>Panel de administración</h2>

            <div className="contenedor">
                <div className="tabla-panel">
                    <div className="cabecera-tabla">
                        <div className="cabecera-col">Producto</div>
                        <div className="cabecera-col">Título</div>
                        <div className="cabecera-col">Precio</div>
                        <div className="cabecera-col">Stock</div>
                        <div className="cabecera-col">Acción</div>
                    </div>
                    <div className="cuerpo-tabla">
                        {
                            listadoProductos.map((producto) => {
                                return <ProductoPanel
                                    key={producto.id} id={producto.id} titulo={producto.titulo} portada={producto.portada} precio={producto.precio} stock={producto.stock} />
                            })

                        }
                    </div>
                </div>
            </div>

        </section>
    )
}
