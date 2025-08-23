import { State, Action } from "@/types/products";

export const initialState = {
    cart: [],
    products: [],
}

export const reducer = (state: State, action: Action): State => {
    const newState = structuredClone(state)

    switch (action.type) {
        case 'ADD_TO_CART':
            newState.cart.push(action.payload);

            fetch("/api/cart", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(action.payload),
            });
            return newState;
        
        case 'REMOVE_FROM_CART':
            newState.cart = newState.cart.filter((p) => p.id !== action.payload);

            fetch("/api/cart", {
                method: "DELETE",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({id: action.payload}),
            })
            return newState;
        default:
            return state;
    }
}