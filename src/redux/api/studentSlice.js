import { apiSlice } from "../api/apiSlice";
import { STUDENTS_URL } from "../constant";

export const studentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createStudent: builder.mutation({
      query: (data) => ({
        url: `${STUDENTS_URL}`, // Create student route
        method: "POST",
        body: data,
        // credentials: "include",
      }),
    }),
    getAllStudents: builder.query({
      query: () => ({
        url: STUDENTS_URL,
        //  credentials: "include",
      }),
      providesTags: ["Student"],
      keepUnusedDataFor: 5,
    }),
    getStudentById: builder.query({
      query: (id) => ({
        url: `${STUDENTS_URL}/${id}`, // Get specific student by ID
        // credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    updateStudent: builder.mutation({
      query: (data) => ({
        url: `${STUDENTS_URL}/${data._id}`, // Use _id for update
        method: "PUT",
        body: data,
        // credentials: "include",
      }),
      invalidatesTags: ["Student"],
    }),
    deleteStudent: builder.mutation({
      query: (_id) => ({
        url: `${STUDENTS_URL}/${_id}`, // Use _id for delete
        method: "DELETE",
        // credentials: "include",
      }),
    }),
  }),
});

export const {
  useCreateStudentMutation,
  useGetAllStudentsQuery,
  useGetStudentByIdQuery,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} = studentApiSlice;
