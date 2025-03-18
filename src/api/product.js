import axios from './axios'

export const listarProductos = () => axios.get('/product')

export const listarDetalleProducto = (id) => axios.get(`product/detail/${id}`)