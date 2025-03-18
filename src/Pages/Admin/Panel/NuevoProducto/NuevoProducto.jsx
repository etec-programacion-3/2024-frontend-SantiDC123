
import { useState } from 'react'
import './NuevoProducto.css'
export const NuevoProducto = () => {
    const [formValues, setFormValues] = useState({ titulo: '', precio: '', stock: '', descripcion: '' })
    const [portada, setPortada] = useState(null)

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
                        <input onChange={(e) => handleInputChange(e)} name='precio' type="number" min={1} />
                    </div>
                    <div>
                        <label htmlFor="">Stock</label>
                        <input onChange={(e) => handleInputChange(e)} name='stock' type="number" min={1} />
                    </div>
                    <div>
                        <label htmlFor="">Descripción</label>
                        <textarea onChange={(e) => handleInputChange(e)} name="descripcion" rows={5}></textarea>
                    </div>
                    <button className='btn-guardar' type='submit'>Guardar</button>
                </form>
            </div>
        </section>
    )
}

