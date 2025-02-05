import { createContext, useContext, useEffect, useState } from "react";
import { peticionAccederCarrito, peticionActualizarCarrito } from "../api/user";

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
            console.log(updatedCart);
            peticionActualizarCarrito({cart:updatedCart})
        } else {
            setCart([...cart, {product:item.id, cantidad:item.cantidad}])
            peticionActualizarCarrito({cart:[...cart, {product:item.id, cantidad:item.cantidad}]})
           console.log({product:item.id, cantidad:item.cantidad});
        }

    }

    const obtenerCarrito = async () => {
          const response = await peticionAccederCarrito()
          setCart(response.data)
            console.log(response.data);
            
    }
    useEffect(() => {
        obtenerCarrito();
    }, [])

    return (
        <CartContext.Provider value={{
            addItem,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}