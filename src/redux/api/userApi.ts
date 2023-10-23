import { IMeta, IUser } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const USER_URL = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUser: build.query({
      query: () => {
        return {
          url: USER_URL,
          method: "GET",
        };
      },
      transformResponse: (response: IUser[], meta: IMeta) => {
        return {
          users: response,
          meta,
        };
      },
      providesTags: [tagTypes.user],
    }),

    getSingleUser: build.query({
      query: (id: string | string[] | undefined) => {
        return {
          url: `${USER_URL}/${id}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.user],
    }),
    // Create User
    createUser: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/create-user`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    updateUser: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useGetSingleUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
