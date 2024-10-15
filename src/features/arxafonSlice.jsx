import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Arxa fon məlumatlarını fetch etmək üçün thunk
export const fetchArxafon = createAsyncThunk("arxafons/fetchArxafon", async () => {
  const response = await axios.get("http://127.0.0.1:8000/api/arxafon"); // API endpoint'in düzgün olduğuna əmin olun
  return response.data;
});

const arxafonSlice = createSlice({
  name: "arxafons",
  initialState: {
    arxafons: [],
    status: "idle", // loading, successed, failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArxafon.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArxafon.fulfilled, (state, action) => {
        state.status = "successed";
        state.arxafons = action.payload;
      })
      .addCase(fetchArxafon.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default arxafonSlice.reducer;
