import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import config from "../services/config";
import axios from "axios";

export const getPrivacies = createAsyncThunk(
  "privacies/getPrivacies",
  async (_, { rejectWithValue }) => {
    try {
      let res = await axios.get(`${config.API_WAJEN}/privacies`);
      return res.data;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

const initialState = {
  privacies: [],
  isLoading: false,
  isError: false,
  error: null,
};

const privaciesSlice = createSlice({
  name: "privacies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPrivacies.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getPrivacies.fulfilled, (state, action) => {
      state.privacies = action.payload || [];
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(getPrivacies.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

export default privaciesSlice.reducer;
