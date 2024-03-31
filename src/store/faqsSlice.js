import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import config from "../services/config";
import axios from "axios";

export const getFaqs = createAsyncThunk(
  "faqs/getFaqs",
  async (_, { rejectWithValue }) => {
    try {
      let res = await axios.get(`${config.API_WAJEN}/apiFaqs`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  faqs: [],
  isLoading: false,
  isError: false,
  error: null,
};

const faqsSlice = createSlice({
  name: "faqs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFaqs.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getFaqs.fulfilled, (state, action) => {
      state.faqs = action.payload || [];
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(getFaqs.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

export default faqsSlice.reducer;
