import { IMeta, IOrder } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const ORDER_URL = "/orders";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllOrder: build.query({
      query: () => {
        return {
          url: ORDER_URL,
          method: "GET",
        };
      },
      transformResponse: (response: IOrder[], meta: IMeta) => {
        return {
          orders: response,
          meta,
        };
      },
      providesTags: [tagTypes.order],
    }),

    getAllOrderForAdmin: build.query({
      query: () => {
        return {
          url: `${ORDER_URL}/all-orders`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.order],
    }),

    createOrder: build.mutation({
      query: (data) => ({
        url: `${ORDER_URL}/create-order`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.order],
    }),
    updateOrder: build.mutation({
      query: (data) => ({
        url: `${ORDER_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.order],
    }),
    deleteOrder: build.mutation({
      query: (id) => ({
        url: `${ORDER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.order],
    }),
  }),
});

export const {
  useGetAllOrderQuery,
  useGetAllOrderForAdminQuery,
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} = orderApi;
