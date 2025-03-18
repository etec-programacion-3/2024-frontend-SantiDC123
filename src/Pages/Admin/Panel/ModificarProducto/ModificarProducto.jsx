
import { useEffect, useState } from "react"
import "./ModificarProducto.css"
import { listarDetalleProducto } from "../../../../api/product"
import { useParams } from "react-router"
export const ModificarProducto = () => {
    const [formValues, setFormValues] = useState({ titulo: '', precio: '', stock: '', descripcion: '' })
    const [portada, setPortada] = useState(null)
    const [producto, setProducto] = useState(null);

    const handleInputChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
    const handleImgChange = (e) => {

        setPortada(e.target.files[0]);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        console.log(portada);

    }
    const { id } = useParams();

    useEffect(() => {
        async function listarDetalle() {
            const detaleResponse = await listarDetalleProducto(id);
            setProducto(detaleResponse.data)
        }
        listarDetalle();
    }, [id])

    return (
        <section className="seccion-nuevo-prod">
            <h2>Modificar producto</h2>
            <div className="contenedor">
                {
                    producto &&
                    <form className='form-nuevo-prod' onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <label htmlFor="">Título</label>
                            <input onChange={(e) => handleInputChange(e)} name='titulo' type="text" defaultValue={producto.titulo} />
                        </div>
                        <div>
                            <label htmlFor="">Portada</label>
                            <div className="contenedor-img">
                                <img src={`/productos/${producto.portada}`} alt="" />
                            </div>

                            <input onChange={(e) => handleImgChange(e)} name='portada' type="file" accept='image/*' />

                        </div>
                        <div>
                            <label htmlFor="">Precio</label>
                            <input onChange={(e) => handleInputChange(e)} name='precio' type="number" min={1} defaultValue={producto.precio} />
                        </div>
                        <div>
                            <label htmlFor="">Stock</label>
                            <input onChange={(e) => handleInputChange(e)} name='stock' type="number" min={1} defaultValue={producto.stock} />
                        </div>
                        <div>
                            <label htmlFor="">Descripción</label>
                            <textarea onChange={(e) => handleInputChange(e)} name="descripcion" rows={5} defaultValue={producto.descripcion}></textarea>
                        </div>
                        <button className='btn-guardar' type='submit'>Guardar</button>
                    </form>
                }

            </div>
        </section>
    )
}
