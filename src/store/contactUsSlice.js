import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import config from "../services/config";
import axios from "axios";

export const sendQuestion = createAsyncThunk(
  "contact/sendQuestion",
  async (body, { rejectWithValue }) => {
    let data = JSON.stringify(body);
    try {
      let res = await axios.post(`${config.API_SKILLTAX}/questions`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      });
      return res.data;
    } catch (error) {
      throw rejectWithValue(error.response.status);
    }
  }
);

export const getCities = createAsyncThunk(
  "contact/getCities",
  async (_, { rejectWithValue }) => {
    try {
      let res = await axios.get(`${config.API_SKILLTAX}/cities`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  cities: [],
  isLoading: false,
  isError: false,
  error: null,
};

const citiesSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCities.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getCities.fulfilled, (state, action) => {
      state.cities = action.payload || [];
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(getCities.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

export default citiesSlice.reducer;
