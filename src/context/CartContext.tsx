'use client';
import { ReactNode, useReducer, createContext, useContext } from 'react';
import { reducer, initialState} from '../reducer/CartReducer';
import { CartContextType } from "@/types/products";


export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({children}: {children: ReactNode}) {
    const [state, dispatch] = useReducer(reducer, initialState);

  
    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if(!context) {
        throw new Error('useCart must be inside CartProvider')
    }
    return context;
}
