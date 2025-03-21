import { createContext, useContext, useState } from "react";
import { peticionCrearProducto } from "../api/product";

export const ProductContext = createContext()


export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('El ProductContext debe ser utilizado en conjunto con ProductProvider');
    }
    return context;
}


export const ProductProvider = ({ children }) => {
    const [loadingProduct, setLoadingProduct] = useState(false);
    const [productoCreado, setProductoCreado] = useState(null)
    const [error, setError] = useState([])

    const crearProducto = async (producto) => {
        setLoadingProduct(true)
        try {
            const response = await peticionCrearProducto(producto);
          
            setProductoCreado(response.data)
        } catch (error) {
            console.log(error);

            setError([error.response.data.message])
        }
        setLoadingProduct(false)

    }
    return (
        <ProductContext.Provider value={{
            crearProducto,
            productoCreado,
            setProductoCreado,
            loadingProduct,
            error
        }}>
            {children}
        </ProductContext.Provider>
    )
}