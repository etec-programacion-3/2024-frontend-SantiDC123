import { createContext, useContext, useState } from "react";
import { peticionCrearProducto, peticionEliminarProducto, peticionListarDetalleProducto, peticionModificarProducto } from "../api/product";

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
    const [productoModificado, setProductoModificado] = useState(null)
    const [productoEliminado, setProductoEliminado] = useState(null)
    const [detalleProducto, setDetalleProducto] = useState(null)
    const [formModificar, setFormModificar] = useState({ titulo: '', precio: '', portada: '', stock: '', descripcion: '' })
    const [error, setError] = useState([])

    const crearProducto = async (producto) => {
        setLoadingProduct(true)
        try {
            const response = await peticionCrearProducto(producto);

            setProductoCreado(response.data)
            setTimeout(() => {
                setProductoCreado(null)
            }, 1000);
        } catch (error) {
            console.log(error);

            setError([error.response.data.message])
        }
        setLoadingProduct(false)

    }

    const modificarProducto = async (id, producto) => {
        setLoadingProduct(true)

        try {
            const response = await peticionModificarProducto(id, producto);
            setProductoModificado(response.data)
            setDetalleProducto(null)
            setTimeout(() => {
                setProductoModificado(null)
            }, 0);
        } catch (error) {
            console.log(error);
            setError([error.response.data.message])
        }

        setLoadingProduct(false)
    }

    const eliminarProducto = async (id) => {
        setLoadingProduct(true)
        try {
            const response = await peticionEliminarProducto(id)
            if (response.status === 204) {
                setProductoEliminado(true)
                setTimeout(() => {
                    setProductoEliminado(null)
                }, 0);
            }
            setError([])
        } catch (error) {
            console.log(error);
            setError([error.response.data.message])
        }
        setLoadingProduct(false)
    }

    const listarDetalleProducto = async (id) => {
        setLoadingProduct(true)
        try {
            const response = await peticionListarDetalleProducto(id);

            setDetalleProducto(response.data)
            const { titulo, precio, portada, categoria, stock, descripcion } = response.data
            setFormModificar({ titulo, precio, portada, categoria, stock, descripcion })
        } catch (error) {
            setError([error.response.data.message])
        }

        setLoadingProduct(false)
    }
    return (
        <ProductContext.Provider value={{
            crearProducto,
            listarDetalleProducto,
            modificarProducto,
            eliminarProducto,
            productoEliminado,
            productoModificado,
            detalleProducto,
            formModificar,
            setFormModificar,
            productoCreado,
            detalleProducto,
            loadingProduct,
            error
        }}>
            {children}
        </ProductContext.Provider>
    )
}