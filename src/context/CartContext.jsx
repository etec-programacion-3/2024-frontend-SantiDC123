import { createContext, useContext, useEffect, useState } from "react";
import { peticionAccederCarrito, peticionActualizarCarrito, peticionListarProductosCarrito } from "../api/user";

export const CartContext = createContext();

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('El CartContext debe ser utilizado en conjunto con CartProvider');
    }
    return context;
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [productosCarrito, setProductosCarrito] = useState([])
    const [totalCarrito, setTotalCarrito] = useState(0)
    
    const addItem = async (item) => {
        
        // IF PARA ANALIZAR SI EL PRODUCTO YA EXISTE EN EL CARRITO.
        if (cart.find(producto => producto.product == item.id)) {
            const updatedCart = cart.map((cartProduct) => {
                if (cartProduct.product == item.id) {
                    return {
                        ...cartProduct,
                        cantidad: parseInt(cartProduct.cantidad) + parseInt(item.cantidad),
                    }
                }
                return cartProduct;
            })
            setCart(updatedCart)
            await peticionActualizarCarrito({cart:updatedCart})
        } else {
            setCart([...cart, {product:item.id, cantidad:item.cantidad}])
           await peticionActualizarCarrito({cart:[...cart, {product:item.id, cantidad:item.cantidad}]})
        }

        setTotalCarrito(totalCarrito + (item.precio * item.cantidad))

    }

    const limpiarCarrito = async () => {
        setCart([]);
        setTotalCarrito(0)
        await peticionActualizarCarrito({cart:[]})
    }

    const quitarProductoCarrito = async (item) => {
        const updatedCart = cart.filter((producto) => producto.product !== item.id )
        
        setCart(updatedCart);
        setTotalCarrito(totalCarrito - (item.precio*item.cantidad))

        await peticionActualizarCarrito({cart:updatedCart})
        await listarProductosCarrito();
    }
    const listarProductosCarrito = async () => {
        const response = await peticionListarProductosCarrito();
        setProductosCarrito(response.data);
        setTotalCarrito(response.data.reduce((total,producto) => producto.cantidad*producto.precio + total , 0 ));
    }

    const obtenerCarrito = async () => {
          const response = await peticionAccederCarrito()
          setCart(response.data)
    }
    useEffect(() => {
        obtenerCarrito();
    }, [])

    return (
        <CartContext.Provider value={{
            addItem,
            productosCarrito,
            limpiarCarrito,
            listarProductosCarrito,
            quitarProductoCarrito,
            cart,
            totalCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}