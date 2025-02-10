import { createContext, useContext, useEffect, useState } from "react";
import { peticionRegistrarVenta } from "../api/sale";

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

    const registrarVenta = async (venta) => {
        try {
            await peticionRegistrarVenta(venta);
            setLoadingSale(false)
        } catch (error) {
            console.log(error);
            setLoadingSale(false)
        }
     
    }

    return (
        <SaleContext.Provider value={{
            loadingSale,
            registrarVenta
        }}>
            {children}
        </SaleContext.Provider>
    )
}