export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"


export function addToCart(product){
    return {
        type : ADD_TO_CART,
        payload: product
    }
}

export function removeFromCart(product){
    return {
        type : REMOVE_FROM_CART,
        payload: product
    }
}