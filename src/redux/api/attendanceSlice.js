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
      // Add a basic error handling or logging for failed requests (optional)
      onError: (error) => {
        console.error('Failed to mark attendance:', error);
      },
    }),

    // ✅ Get attendance for a specific teacher
    getTeacherAttendance: builder.query({
      query: (teacherId) => ({
        url: `${ATTENDANCE_URL}/${teacherId}`,
        credentials: "include",
      }),
      providesTags: ["Attendance"],
      keepUnusedDataFor: 5,
      // Optional: Handling onError globally or specifically for this query
      onError: (error) => {
        console.error('Failed to fetch teacher attendance:', error);
      },
    }),

    // ✅ Get all attendance records (Admin only)
    getAllAttendance: builder.query({
      query: () => ({
        url: `${ATTENDANCE_URL}/all`,
        credentials: "include",
      }),
      providesTags: ["Attendance"],
      keepUnusedDataFor: 5,
      onError: (error) => {
        console.error('Failed to fetch all attendance records:', error);
      },
    }),

    // ✅ Delete attendance record
    deleteAttendance: builder.mutation({
      query: (id) => ({
        url: `${ATTENDANCE_URL}/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Attendance"],
      // Optional: Handling onError for deletion
      onError: (error) => {
        console.error('Failed to delete attendance record:', error);
      },
    }),
  }),
});

export const {
  useMarkAttendanceMutation,
  useGetTeacherAttendanceQuery,
  useGetAllAttendanceQuery,
  useDeleteAttendanceMutation,
} = attendanceApiSlice;
