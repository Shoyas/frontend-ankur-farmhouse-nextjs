import { IMeta, IService } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const SERVICE_URL = "/services";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllService: build.query({
      query: () => {
        return {
          url: SERVICE_URL,
          method: "GET",
        };
      },
      transformResponse: (response: IService[], meta: IMeta) => {
        return {
          service: response,
          meta,
        };
      },
      providesTags: [tagTypes.service],
    }),

    getSingleService: build.query({
      query: (id: string | string[] | undefined) => {
        return {
          url: `${SERVICE_URL}/${id}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.service],
    }),
    createService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}/create-service`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    updateService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    deleteService: build.mutation({
      query: (id) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const {
  useGetAllServiceQuery,
  useGetSingleServiceQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
