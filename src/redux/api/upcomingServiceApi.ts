import { IMeta, IUpcomingOfferService } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const UPCOMING_SERVICE_URL = "/upcoming-offer-services";

export const upcomingServiceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUpcomingService: build.query({
      query: () => {
        return {
          url: UPCOMING_SERVICE_URL,
          method: "GET",
        };
      },
      transformResponse: (response: IUpcomingOfferService[], meta: IMeta) => {
        return {
          upcomingService: response,
          meta,
        };
      },
      providesTags: [tagTypes.upcomingService],
    }),

    getSingleUpcomingService: build.query({
      query: (id: string | string[] | undefined) => {
        return {
          url: `${UPCOMING_SERVICE_URL}/${id}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.upcomingService],
    }),
    createUpcomingService: build.mutation({
      query: (data) => ({
        url: `${UPCOMING_SERVICE_URL}/create-upcoming-offer-service`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.upcomingService],
    }),
    updateUpcomingService: build.mutation({
      query: (data) => ({
        url: `${UPCOMING_SERVICE_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.upcomingService],
    }),
    deleteUpcomingService: build.mutation({
      query: (id) => ({
        url: `${UPCOMING_SERVICE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.upcomingService],
    }),
  }),
});

export const {
  useGetAllUpcomingServiceQuery,
  useGetSingleUpcomingServiceQuery,
  useCreateUpcomingServiceMutation,
  useUpdateUpcomingServiceMutation,
  useDeleteUpcomingServiceMutation,
} = upcomingServiceApi;
