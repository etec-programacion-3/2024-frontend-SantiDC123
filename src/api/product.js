import axios from './axios'

export const listarProductos = () => axios.get('/product')