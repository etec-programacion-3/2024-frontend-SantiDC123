import axios from './axios'

export const peticionRegistrarVenta = (venta) => axios.post('/sale',venta);
export const peticionListarComprasCliente = () => axios.get('/sale/client');
export const peticionListarDetalleVenta = (idVenta) => axios.get(`/sale/detail/${idVenta}`);