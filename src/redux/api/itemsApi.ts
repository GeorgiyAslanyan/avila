import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Item, ItemsApi } from "../../types/types";

export const itemsApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://63625d277521369cd06ba3c2.mockapi.io/",
  }),
  endpoints: (build) => ({
    getItems: build.query<Item[], ItemsApi>({
      query: (arg) => {
        const { limit = 10, page = 1, category, search, sortBy, order } = arg;
        return {
          url: "items",
          params: {
            limit,
            page,
            category,
            title: search,
            sortBy,
            order,
          },
        };
      },
    }),
  }),
});

export const { useGetItemsQuery } = itemsApi;
