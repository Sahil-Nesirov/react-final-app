import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLogos = createAsyncThunk("logos/fetchLogos", async () => {
  const response = await axios.get("http://localhost:8000/api/site-logo");
  return response.data;
});

const logoSlice = createSlice({
  name: "logos",
  initialState: {
    logos: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLogos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLogos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.logos = action.payload;
      })
      .addCase(fetchLogos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default logoSlice.reducer;
