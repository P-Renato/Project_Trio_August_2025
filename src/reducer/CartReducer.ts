import { Product } from "@/types/products";

export type State = {
    cart: Product[];
    products: Product[];
}

export type Action = {
    type: string,
    payload?: any;
}

export const initialState = {
    cart: [],
    products: [],
}

export const reducer = (state: State, action: Action): State => {
    const newState = structuredClone(state)

    switch (action.type) {
        case 'ADD_TO_CART':
            newState.cart.push(action.payload);
            return newState;
        default:
            return state;
    }
}