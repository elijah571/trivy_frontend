import { apiSlice } from "./apiSlice";
import { ATTENDANCE_URL } from "../constant";

export const attendanceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Mark attendance
    markAttendance: builder.mutation({
      query: (data) => ({
        url: `${ATTENDANCE_URL}/mark`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

    // ✅ Get attendance for a specific teacher
    getTeacherAttendance: builder.query({
      query: (teacherId) => ({
        url: `${ATTENDANCE_URL}/${teacherId}`,
        credentials: "include",
      }),
      providesTags: ["Attendance"],
      keepUnusedDataFor: 5,
    }),

    // ✅ Get all attendance records (Admin only)
    getAllAttendance: builder.query({
      query: () => ({
        url: `${ATTENDANCE_URL}/all`,
        credentials: "include",
      }),
      providesTags: ["Attendance"],
      keepUnusedDataFor: 5,
    }),
     // ✅ Delete attendance record
     deleteAttendance: builder.mutation({
      query: (id) => ({
        url: `${ATTENDANCE_URL}/${id}`,
        method: 'DELETE',
        credentials: "include",
      }),
      invalidatesTags: ["Attendance"],
    }),
  }),
});

export const {
  useMarkAttendanceMutation,
  useGetTeacherAttendanceQuery,
  useGetAllAttendanceQuery, 
  useDeleteAttendanceMutation,
} = attendanceApiSlice;
