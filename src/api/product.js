import axios from './axios'

export const listarProductos = () => axios.get('/product')

export const peticionEliminarProducto = (id) => axios.delete(`product/delete/${id}`)

export const peticionListarDetalleProducto = (id) => axios.get(`product/detail/${id}`)

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


export const peticionModificarProducto = async (id,producto) => {
    const formProducto = new FormData();
    for (const key in producto) {
        formProducto.append(key, producto[key])
    }
    console.log(producto);
    console.log(formProducto);
    return await axios.put(`product/update/${id}`, formProducto, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}