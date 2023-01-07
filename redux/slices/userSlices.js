import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";
import { HYDRATE } from "next-redux-wrapper";
//get All
export const getAllAction = createAsyncThunk(
  "getAll/user",
  async (data, { rejectWithValue }) => {
    try {
      const response = await userApi.getAll();
      // console.log("response", response.data.data);
      return response.data.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      // console.log('rejectWithValue', error?.response?.data?.data?.msg);
      return rejectWithValue(error?.response?.msg);
    }
  }
);

//reducer
const userSlice = createSlice({
  name: "users",
  initialState: { data: [] },
  extraReducers: {
    [getAllAction.pending]: (state, action) => {
      state.loading = true;
      state.appError = undefined;
      state.serverError = undefined;
    },
    [getAllAction.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.appError = undefined;
      state.serverError = undefined;
    },
    [getAllAction.rejected]: (state, action) => {
      state.loading = false;
      state.appError = action?.payload;
      state.serverError = action?.error?.message;
    },
  },
});

export const selectUsers = (state) => state?.users;

export default userSlice.reducer;
