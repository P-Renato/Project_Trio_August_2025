




export interface Product {
    _id: string,
    id: string,
    name: string,
    category: string,
    price: number,
    rating: number,
    stock: number,
    image: string[],
}

export type State = {
    cart: Product[];
    products: Product[];
}

export type Action = {
    type: string,
    payload?: any;
}

export type CartContextType = {
    state: State;
    dispatch: React.Dispatch<Action>;
};
