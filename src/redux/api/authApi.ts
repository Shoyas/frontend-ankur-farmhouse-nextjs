import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";
export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Login User
    userSignin: build.mutation({
      query: (signinData) => ({
        url: `${AUTH_URL}/signin`,
        method: "POST",
        data: signinData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    // Sign Up User
    userSignup: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/signup`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useUserSigninMutation, useUserSignupMutation } = authApi;
