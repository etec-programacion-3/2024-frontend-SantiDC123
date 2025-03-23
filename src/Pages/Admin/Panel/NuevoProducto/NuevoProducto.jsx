
import { useEffect, useState } from 'react'
import './NuevoProducto.css'
import { useProductContext } from '../../../../context/ProductContext'
import { useNavigate } from 'react-router'

export const NuevoProducto = () => {
    const [formValues, setFormValues] = useState({ titulo: '', precio: '',categoria:'', stock: '', descripcion: '' })
    const [portada, setPortada] = useState(null)
    const { crearProducto, productoCreado, error, loadingProduct } = useProductContext();

    const navigate = useNavigate();
    const handleInputChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
    const handleImgChange = (e) => {
        setPortada(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        crearProducto({ ...formValues, portada });
    }

    useEffect(() => {
        if (productoCreado) {
            alert('Producto creado con éxito')
            navigate('/panel');
        }
    }, [productoCreado])
    return (
        <section className="seccion-nuevo-prod">
            <h2>Nuevo producto</h2>
            <div className="contenedor">
                <form className='form-nuevo-prod' onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label htmlFor="">Título</label>
                        <input onChange={(e) => handleInputChange(e)} name='titulo' type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Portada</label>
                        <input onChange={(e) => handleImgChange(e)} name='portada' type="file" accept='image/*' />
                    </div>
                    <div>
                        <label htmlFor="">Precio</label>
                        <input onChange={(e) => handleInputChange(e)} name='precio' type="number" min={0} />
                    </div>
                    <div>
                        <label htmlFor="">Categoría</label>
                        <input onChange={(e) => handleInputChange(e)} name='categoria' type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Stock</label>
                        <input onChange={(e) => handleInputChange(e)} name='stock' type="number" min={0} />
                    </div>
                    <div>
                        <label htmlFor="">Descripción</label>
                        <textarea onChange={(e) => handleInputChange(e)} name="descripcion" rows={5}></textarea>
                    </div>
                    <div>
                        {
                            error &&
                            <p className='text-error'>{error}</p>
                        }
                    </div>
                    <button className='btn-guardar' type='submit'> {loadingProduct ? 'Procesando..' : 'Guardar'} </button>
                </form>
            </div>
        </section>
    )
}

