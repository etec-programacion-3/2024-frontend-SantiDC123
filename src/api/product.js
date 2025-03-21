import axios from './axios'

export const listarProductos = () => axios.get('/product')

export const listarDetalleProducto = (id) => axios.get(`product/detail/${id}`)

export const peticionCrearProducto = async (producto) => {
    const formProducto = new FormData();
    for (const key in producto) {
        formProducto.append(key, producto[key])
    }
    console.log(producto);
    console.log(formProducto);
    return await axios.post('product/new', formProducto, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}