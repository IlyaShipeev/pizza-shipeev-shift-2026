import { queryOptions } from "@tanstack/react-query";
import axiosClient from "../axiosClient";
import type { CartItem } from "../../types/cart.types";

export const cartApi = {
    baseKey: "cart",

    getCart: () => {
        return queryOptions<CartItem[]>({
            queryKey: [cartApi.baseKey],
            queryFn: async ({ signal }) => {
                const response = await axiosClient.get<CartItem[]>("/cart", {
                    signal,
                });
                return response.data;
            },
        });
    },

    addToCart: (cartItem: CartItem) => {
        return axiosClient.post("/cart/add", cartItem);
    },

    removeFromCart: (id: string) => {
        return axiosClient.delete(`/cart/${id}`);
    },

    updateCart: (id: string, quantity: number) => {
        return axiosClient.put(`/cart/${id}`, { quantity });
    },

    clearCart: () => {
        return axiosClient.delete("/cart/clear");
    },
};
