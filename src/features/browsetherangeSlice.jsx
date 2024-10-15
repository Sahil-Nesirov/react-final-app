import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBrowsetherange = createAsyncThunk('fetchBrowsetherange', async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/browse-the-range');
        return response.data;
    } catch (Error) {
        throw new Error
    }
})

const browseTheRangeSlice = createSlice({
    name: 'browsetherange',
    initialState: {
        browsetherange: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
           .addCase(fetchBrowsetherange.pending, (state) => {
                state.status = 'loading';
            })
           .addCase(fetchBrowsetherange.fulfilled, (state, action) => {
                state.status ='succeeded';
                state.browsetherange = action.payload;
            })
           .addCase(fetchBrowsetherange.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default browseTheRangeSlice.reducer;