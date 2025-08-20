'use client';
import { ReactNode, useReducer } from 'react';
import { reducer, initialState, State, Action } from '../reducer/CartReducer';

type CartContextType = {
    state: State;
    dispatch: React.Dispatch<Action>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({children}: {children: ReactNode}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    );
}

