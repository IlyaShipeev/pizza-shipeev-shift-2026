import { queryOptions } from "@tanstack/react-query";
import axiosClient from "../axiosClient";
import type { CatalogResponseDto } from "../../types/catalog.types";

export const PizzaListApi = {
    baseKey: "pizza",
    getPizzaListQueryOptions: () => {
        return queryOptions<CatalogResponseDto>({
            queryKey: [PizzaListApi.baseKey, "list"],
            queryFn: async ({ signal }) => {
                const response = await axiosClient.get<CatalogResponseDto>(
                    "/catalog",
                    { signal },
                );
                console.log("Сырой axios response:", response);
                console.log("response.data целиком:", response.data);
                return response.data;
            },
        });
    },
};
