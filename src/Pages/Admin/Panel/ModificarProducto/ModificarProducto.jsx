
import { useEffect, useState } from "react"
import "./ModificarProducto.css"
import { useNavigate, useParams } from "react-router"
import { SERVER_URL } from "../../../../utils/utils"
import { useProductContext } from "../../../../context/ProductContext"

export const ModificarProducto = () => {

    const [nuevaPortada, setNuevaPortada] = useState(null)
    const { error, loadingProduct, detalleProducto, listarDetalleProducto, formModificar, setFormModificar, modificarProducto, productoModificado } = useProductContext();

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        setFormModificar({ ...formModificar, [e.target.name]: e.target.value })
    }
    const handleImgChange = (e) => {
        setNuevaPortada(e.target.files[0]);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        modificarProducto(id, { ...formModificar, nuevaPortada });

    }
    const { id } = useParams();

    useEffect(() => {
        listarDetalleProducto(id)
    }, [id])

    useEffect(() => {
        if (productoModificado) {
            alert('Producto modificado con éxito.')
            navigate('/panel')
        }
    }, [productoModificado])

    return (
        <section className="seccion-nuevo-prod">
            <h2>Modificar producto</h2>
            <div className="contenedor">

                {

                    loadingProduct 
                    ?
                        <p>Cargando.. </p>
                        :

                        detalleProducto &&
                        <form className='form-nuevo-prod' onSubmit={(e) => handleSubmit(e)}>
                            <fieldset disabled={loadingProduct ? 'disabled' : ''}>
                                <div>
                                    <label htmlFor="">Título</label>
                                    <input onChange={(e) => handleInputChange(e)} name='titulo' type="text" defaultValue={detalleProducto.titulo} />
                                </div>
                                <div>
                                    <label htmlFor="">Portada Actual</label>
                                    <div className="contenedor-img">
                                        <img src={SERVER_URL + detalleProducto.portada} alt="" />
                                    </div>

                                    <input onChange={(e) => handleImgChange(e)} name='portada' type="file" accept='image/*' />

                                </div>
                                <div>
                                    <label htmlFor="">Precio</label>
                                    <input onChange={(e) => handleInputChange(e)} name='precio' type="number" min={0} defaultValue={detalleProducto.precio} />
                                </div>
                                <div>
                                    <label htmlFor="">Stock</label>
                                    <input onChange={(e) => handleInputChange(e)} name='stock' type="number" min={0} defaultValue={detalleProducto.stock} />
                                </div>
                                <div>
                                    <label htmlFor="">Descripción</label>
                                    <textarea onChange={(e) => handleInputChange(e)} name="descripcion" rows={5} defaultValue={detalleProducto.descripcion}></textarea>
                                </div>
                                <div>
                                    {
                                        error &&
                                        <p className='text-error'>{error}</p>
                                    }
                                </div>
                                <button className={`btn-guardar ${loadingProduct ? 'disabled' : ''}`} type='submit'>Modificar</button>
                            </fieldset>
                        </form>
                }

            </div>
        </section>
    )
}
