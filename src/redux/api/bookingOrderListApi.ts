import { IBooking_Order, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const BOOKING_ORDER_URL = "/upcoming-offer-orders";

export const bookingOrderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllBookingOrder: build.query({
      query: () => {
        return {
          url: BOOKING_ORDER_URL,
          method: "GET",
        };
      },
      transformResponse: (response: IBooking_Order[], meta: IMeta) => {
        return {
          booking_orders: response,
          meta,
        };
      },
      providesTags: [tagTypes.booking_order],
    }),

    getAllBookingOrderForAdmin: build.query({
      query: () => {
        return {
          url: `${BOOKING_ORDER_URL}/all-booking-orders`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.booking_order],
    }),

    createBookingOrder: build.mutation({
      query: (data) => ({
        url: `${BOOKING_ORDER_URL}/booking-order`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.booking_order],
    }),
    updateBookingOrder: build.mutation({
      query: (data) => ({
        url: `${BOOKING_ORDER_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.booking_order],
    }),
    deleteBookingOrder: build.mutation({
      query: (id) => ({
        url: `${BOOKING_ORDER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.booking_order],
    }),
  }),
});

export const {
  useGetAllBookingOrderQuery,
  useGetAllBookingOrderForAdminQuery,
  useCreateBookingOrderMutation,
  useDeleteBookingOrderMutation,
  useUpdateBookingOrderMutation,
} = bookingOrderApi;
