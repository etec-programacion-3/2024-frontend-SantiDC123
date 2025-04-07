import axios from './axios'

export const peticionlistarHistorialStock = () => axios.get('/stock/historial')
export const peticionlistarHistorialStockPorProducto = (id) => axios.get(`/stock/historial/${id}`)

