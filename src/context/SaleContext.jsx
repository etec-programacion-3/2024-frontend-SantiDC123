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
    const [loadingSale, setLoadingSale] = useState(true);
    const [listadoComprasCliente, setListadoComprasCliente] = useState([]);
    const [errorsSale, setErrorsSale] = useState([])
    const [ventaProcesada, setVentaProcesada] = useState(false)

    const registrarVenta = async (venta) => {
        setLoadingSale(true)
        try {
            await peticionRegistrarVenta(venta);
            setErrorsSale([])
            setVentaProcesada(true)
        } catch (error) {
            console.log(error);
            setErrorsSale(error.response.data)
            setVentaProcesada(false)
        }
        finally{
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

    useEffect(() => {
        if (errorsSale.length > 0) {
            const timer = setTimeout(() => {
                setErrorsSale([])
            }, 45000)
            return () => clearTimeout(timer)
        }
    }, [errorsSale])

    const restablecerEstadoSale = () => {
        setVentaProcesada(false)
        setErrorsSale([])
        setLoadingSale(false)
    }

    return (
        <SaleContext.Provider value={{
            setLoadingSale,
            loadingSale,
            registrarVenta,
            listarComprasCliente,
            listarDetalleVenta,
            listadoComprasCliente,
            errorsSale,
            ventaProcesada,
            restablecerEstadoSale
        }}>
            {children}
        </SaleContext.Provider>
    )
}