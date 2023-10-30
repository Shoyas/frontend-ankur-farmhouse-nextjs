import { IMeta, IReviewAndRating } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const REVIEW_URL = "/reviews-and-ratings";

export const reviewAndRatingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllReviewAndRating: build.query({
      query: () => {
        return {
          url: REVIEW_URL,
          method: "GET",
        };
      },
      transformResponse: (response: IReviewAndRating[], meta: IMeta) => {
        return {
          reviewAndRatings: response,
          meta,
        };
      },
      providesTags: [tagTypes.reviewAndRating],
    }),
    getSingleReviewAndRating: build.query({
      query: (id: string | string[] | undefined) => {
        return {
          url: `${REVIEW_URL}/${id}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.reviewAndRating],
    }),
    createReviewAndRating: build.mutation({
      query: (data) => ({
        url: `${REVIEW_URL}/create-review-and-rating`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.reviewAndRating],
    }),
    updateReviewAndRating: build.mutation({
      query: (data) => ({
        url: `${REVIEW_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.reviewAndRating],
    }),
    deleteReviewAndRating: build.mutation({
      query: (id) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.reviewAndRating],
    }),
  }),
});

export const {
  useGetAllReviewAndRatingQuery,
  useGetSingleReviewAndRatingQuery,
  useCreateReviewAndRatingMutation,
  useUpdateReviewAndRatingMutation,
  useDeleteReviewAndRatingMutation,
} = reviewAndRatingApi;
