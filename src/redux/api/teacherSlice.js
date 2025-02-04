import { apiSlice } from "../api/apiSlice";
import { TEACHERS_URL } from "../constant";

export const teacherApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginTeacher: builder.mutation({
      query: (data) => ({
        url: `${TEACHERS_URL}/login`,  // Use template literal correctly
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    registerTeacher: builder.mutation({
      query: (data) => ({
        url: `${TEACHERS_URL}/create`,  // Use template literal correctly
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    logoutTeacher: builder.mutation({
      query: () => ({
        url: `${TEACHERS_URL}/logout`,  // Use template literal correctly
        method: "POST",
        credentials: "include",
      }),
    }),
    getTeachers: builder.query({
      query: () => ({
        url: `${TEACHERS_URL}`,  // Use template literal correctly
        credentials: "include",
      }),
      providesTags: ["Teacher"],
      keepUnusedDataFor: 5,
    }),
    deleteTeacher: builder.mutation({
      query: (teacherId) => ({
        url: `${TEACHERS_URL}/${teacherId}`,  // Use template literal correctly
        method: "DELETE",
        credentials: "include",
      }),
    }),
    getTeacherDetails: builder.query({
      query: (id) => ({
        url: `${TEACHERS_URL}/${id}`,  // Use template literal correctly
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    updateTeacher: builder.mutation({
      query: (data) => ({
        url: `${TEACHERS_URL}/${data.teacherId}`,  // Use template literal correctly
        method: "PUT",
        body: data,
        credentials: "include",
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
