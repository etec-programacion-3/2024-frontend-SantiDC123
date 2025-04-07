import { createContext, useContext, useEffect, useState } from "react";
import { peticionlistarHistorialStock, peticionlistarHistorialStockPorProducto } from "../api/stock";

export const StockContext = createContext();

export const useStockContext = () => {
    const context = useContext(StockContext);
    if (!context) {
        throw new Error('El StockContext debe ser utilizado en conjunto con StockProvider');
    }
    return context;
}

export const StockProvider = ({ children }) => {
    const [listadoHistorialStock, setListadoHistorialStock] = useState([]);
    const [listadoHistorialStockGeneral, setListadoHistorialStockGeneral] = useState([]);
    const [loadingStock, setLoadingStock] = useState(false);
    const [error, setError] = useState([])

    const listarHistorialStockPorProducto = async (id) => {
        setLoadingStock(true)
        try {
            const response = await peticionlistarHistorialStockPorProducto(id)
            setListadoHistorialStock(response.data)           
            setError([])
        } catch (error) {
            setError([error.response.data.message])
        }
        setLoadingStock(false)
    }

    const listarHistorialStockGeneral = async (id) => {
        setLoadingStock(true)
        try {
            const response = await peticionlistarHistorialStock(id)
            setListadoHistorialStockGeneral(response.data)          
            console.log(response.data);
             
            setError([])
        } catch (error) {
            setError([error.response.data.message])
        }
        setLoadingStock(false)
    }


    const limpiarError = () => {
        setError([])
    }
    return (
        <StockContext.Provider value={{
            listarHistorialStockPorProducto,
            listadoHistorialStock,
            listarHistorialStockGeneral,
            listadoHistorialStockGeneral,
            loadingStock,
            error,
            limpiarError
        }}>
            {children}
        </StockContext.Provider>
    )
}