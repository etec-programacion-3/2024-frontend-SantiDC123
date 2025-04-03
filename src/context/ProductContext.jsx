import { createContext, useContext, useState } from "react";
import { peticionCrearProducto, peticionEliminarProducto, peticionListarDetalleProducto, peticionListarProductos, peticionListarProductosAdmin, peticionModificarEstadoActivo, peticionModificarProducto } from "../api/product";

export const ProductContext = createContext()


export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('El ProductContext debe ser utilizado en conjunto con ProductProvider');
    }
    return context;
}


export const ProductProvider = ({ children }) => {
    const [listadoProductos, setListadoProductos] = useState([])
    const [listadoProductosAdmin, setListadoProductosAdmin] = useState([])
    const [loadingProduct, setLoadingProduct] = useState(false);
    const [productoCreado, setProductoCreado] = useState(null)
    const [productoModificado, setProductoModificado] = useState(null)
    const [productoEliminado, setProductoEliminado] = useState(null)
    const [detalleProducto, setDetalleProducto] = useState(null)
    const [formModificar, setFormModificar] = useState({ titulo: '', precio: '', portada: '', stock: '', descripcion: '' })
    const [error, setError] = useState([])

    const listarProductos = async () => {

        try {
            setLoadingProduct(true)
            const response = await peticionListarProductos();
            setListadoProductos(response.data)
        } catch (error) {
            console.log(error);
            setError([error.response.data.message])
        } finally {
            setLoadingProduct(false)
        }

    }

    const listarProductosAdmin = async () => {

        try {
            setLoadingProduct(true)
            const response = await peticionListarProductosAdmin();
            setListadoProductosAdmin(response.data)
        } catch (error) {
            console.log(error);
            setError([error.response.data.message])
        } finally {
            setLoadingProduct(false)
        }

    }
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

    const modificarEstadoActivo = async (id) => {
        setLoadingProduct(true)
        try {
            const response = await peticionModificarEstadoActivo(id);
            setProductoModificado(response.data)
            setTimeout(() => {
                setProductoModificado(null)
            }, 0);
            const updatedProducts = listadoProductosAdmin.map(producto => {
                if (producto._id == id) {
                    producto.activo = !producto.activo;
                    return producto;
                }
                return producto;
            })
            setListadoProductosAdmin(updatedProducts)
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
            console.log(response.data);

            if (response.status === 204) {
                const updatedProducts = listadoProductos.filter((producto) => producto._id != id)
                setListadoProductos(updatedProducts);
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

    const limpiarError = () => {
        setError([])
    }
    return (
        <ProductContext.Provider value={{
            listarProductos,
            listadoProductos,
            listarProductosAdmin,
            listadoProductosAdmin,
            crearProducto,
            listarDetalleProducto,
            modificarProducto,
            modificarEstadoActivo,
            eliminarProducto,
            productoEliminado,
            productoModificado,
            detalleProducto,
            formModificar,
            setFormModificar,
            productoCreado,
            detalleProducto,
            loadingProduct,
            error,
            limpiarError
        }}>
            {children}
        </ProductContext.Provider>
    )
}