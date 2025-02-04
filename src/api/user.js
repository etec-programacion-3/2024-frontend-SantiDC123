import axios from './axios';

export const peticionRegistrarUsuario = usuario => axios.post('/registro', usuario)
export const peticionLoginUsuario = usuario => axios.post('/login', usuario)
export const peticionVerificarLogin = () => axios.get('/verificar')