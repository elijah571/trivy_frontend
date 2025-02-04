import { apiSlice } from "../api/apiSlice";
import { TEACHERS_URL } from "../constant";

export const teacherApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginTeacher: builder.mutation({
      query: (data) => ({
        url: `${TEACHERS_URL}/login`,
        method: "POST",
        body: data,
        //credentials: "include",  // This ensures cookies are sent with the request
      }),
    }),
    registerTeacher: builder.mutation({
      query: (data) => ({
        url: `${TEACHERS_URL}/create`,
        method: "POST",
        body: data,
        // credentials: "include",  // This ensures cookies are sent with the request
      }),
    }),
    logoutTeacher: builder.mutation({
      query: () => ({
        url: `${TEACHERS_URL}/logout`,
        method: "POST",
        // credentials: "include",  // This ensures cookies are sent with the request
      }),
    }),
    getTeachers: builder.query({
      query: () => ({
        url: `${TEACHERS_URL}`,
        credentials: "include",  // This ensures cookies are sent with the request
      }),
      providesTags: ["Teacher"],
      keepUnusedDataFor: 5,
    }),
    deleteTeacher: builder.mutation({
      query: (teacherId) => ({
        url: `${TEACHERS_URL}/${teacherId}`,
        method: "DELETE",
        // credentials: "include",  // This ensures cookies are sent with the request
      }),
    }),
    getTeacherDetails: builder.query({
      query: (id) => ({
        url: `${TEACHERS_URL}/${id}`,
        credentials: "include",  // This ensures cookies are sent with the request
      }),
      keepUnusedDataFor: 5,
    }),
    updateTeacher: builder.mutation({
      query: (data) => ({
        url: `${TEACHERS_URL}/${data.teacherId}`,
        method: "PUT",
        body: data,
        // credentials: "include",  // This ensures cookies are sent with the request
      }),
      invalidatesTags: ["Teacher"],
    }),
  }),
});

export const {
  useLoginTeacherMutation,
  useLogoutTeacherMutation,
  useRegisterTeacherMutation,
  useGetTeachersQuery,
  useDeleteTeacherMutation,
  useGetTeacherDetailsQuery,
  useUpdateTeacherMutation,
} = teacherApiSlice;
