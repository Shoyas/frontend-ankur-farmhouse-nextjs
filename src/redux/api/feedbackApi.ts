import { IFeedback, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const FEEDBACK_URL = "/feedbacks";

export const feedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllFeedback: build.query({
      query: () => {
        return {
          url: FEEDBACK_URL,
          method: "GET",
        };
      },
      transformResponse: (response: IFeedback[], meta: IMeta) => {
        return {
          feedbacks: response,
          meta,
        };
      },
      providesTags: [tagTypes.feedback],
    }),

    getSingleFeedback: build.query({
      query: (id: string | string[] | undefined) => {
        return {
          url: `${FEEDBACK_URL}/${id}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.feedback],
    }),
    createFeedback: build.mutation({
      query: (data) => ({
        url: `${FEEDBACK_URL}/create-feedback`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.feedback],
    }),
    updateFeedback: build.mutation({
      query: (data) => ({
        url: `${FEEDBACK_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.feedback],
    }),
    deleteFeedback: build.mutation({
      query: (id) => ({
        url: `${FEEDBACK_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.feedback],
    }),
  }),
});

export const {
  useGetAllFeedbackQuery,
  useGetSingleFeedbackQuery,
  useDeleteFeedbackMutation,
  useUpdateFeedbackMutation,
} = feedbackApi;
