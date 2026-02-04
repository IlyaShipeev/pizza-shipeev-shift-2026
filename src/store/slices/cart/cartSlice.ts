import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "../../../types/cart.types";

export interface CartState {
    items: CartItem[];
    totalQuantity: number;
    totalAmount: number;
}

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const item = state.items.find(
                (item) => item.id === action.payload.id,
            );

            if (item) {
                item.quantity += action.payload.quantity;
                item.total = item.quantity * item.price;
            } else {
                state.items.push(action.payload);
            }

            state.totalQuantity += action.payload.quantity;
            state.totalAmount += action.payload.total;
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                state.totalQuantity -= item.quantity;
                state.totalAmount -= item.total;
                state.items = state.items.filter(
                    (item) => item.id !== action.payload,
                );
            }
        },
        updateQuantity: (
            state,
            action: PayloadAction<{ id: string; quantity: number }>,
        ) => {
            const item = state.items.find(
                (item) => item.id === action.payload.id,
            );
            if (item) {
                const diff = action.payload.quantity - item.quantity;
                item.quantity = action.payload.quantity;
                item.total = item.quantity * item.price;
                state.totalQuantity += diff;
                state.totalAmount += diff * item.price;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
    cartSlice.actions;
export default cartSlice.reducer;
