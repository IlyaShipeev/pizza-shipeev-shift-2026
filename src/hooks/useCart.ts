import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../store/slices/cart/cartSlice"
import type { CartState } from "../store/slices/cart/cartSlice";
import type { CartItem } from "../types/cart.types";
const useCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state: CartState) => state);

    const addItemToCart = (cartItem: CartItem) => {
        dispatch(addToCart(cartItem));
    };

    const removeItemFromCart = (id: string) => {
        dispatch(removeFromCart(id));
    };

    const clearCartItems = () => {
        dispatch(clearCart());
    };

    return {
        cart,
        addItemToCart,
        removeItemFromCart,
        clearCartItems,
    };
};

export default useCart;
