import { createContext, useContext, useEffect, useState } from "react";
import { peticionListarComprasCliente, peticionListarDetalleVenta, peticionRegistrarVenta } from "../api/sale";

export const SaleContext = createContext();

export const useSaleContext = () => {
    const context = useContext(SaleContext);
    if (!context) {
        throw new Error('El SaleContext debe ser utilizado en conjunto con SaleProvider');
    }
    return context;
}

export const SaleProvider = ({ children }) => {
    const [loadingSale,setLoadingSale] = useState(true);
    const [listadoComprasCliente, setListadoComprasCliente] = useState([]);

    const registrarVenta = async (venta) => {
        try {
            await peticionRegistrarVenta(venta);
            setLoadingSale(false)
        } catch (error) {
            console.log(error);
            setLoadingSale(false)
        }
     
    }

    const listarComprasCliente = async () => {
        try {
            const response = await peticionListarComprasCliente();
            setListadoComprasCliente(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    const listarDetalleVenta = async (idVenta) => {
        try {
            const response = await peticionListarDetalleVenta(idVenta);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <SaleContext.Provider value={{
            loadingSale,
            registrarVenta,
            listarComprasCliente,
            listarDetalleVenta,
            listadoComprasCliente
        }}>
            {children}
        </SaleContext.Provider>
    )
}