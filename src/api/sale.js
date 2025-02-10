import axios from './axios'

export const peticionRegistrarVenta = (venta) => axios.post('/sale',venta);