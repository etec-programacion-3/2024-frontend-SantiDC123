import { createContext, useContext, useState } from "react";

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
        console.log(item);
        
        setCart([...cart, item])
       
    }
    return (
        <CartContext.Provider value={{
            addItem,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}