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

//get All
export const createAction = createAsyncThunk(
  "create/user",
  async (data, { rejectWithValue }) => {
    try {
      console.log("dataReq", data);
      const response = await userApi.getAll(data);
      console.log("response", response.data.data);
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

//get user Info zalo
export const getInfoZalo = createAsyncThunk(
  "infoZalo/user",
  async (data, { rejectWithValue }) => {
    try {
      console.log("dataReq", data);
      const response = await userApi.getInfo(data);
      console.log("response", response);

      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      // console.log('rejectWithValue', error?.response?.data?.data?.msg);
      return rejectWithValue(error?.response?.msg);
    }
  }
);

//get access Token zalo
export const getAccessTokenZalo = createAsyncThunk(
  "accessTokenZalo/user",
  async (data, { rejectWithValue }) => {
    try {
      console.log("dataReq", data);
      const response = await userApi.getAccessTokenZalo(data);
      console.log("response", response);
      localStorage.setItem(
        "userAccessTokenZalo",
        JSON.stringify(response.data.access_token)
      );
      localStorage.setItem(
        "userRefreshTokenZalo",
        JSON.stringify(response.data.refresh_token)
      );
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      // console.log('rejectWithValue', error?.response?.data?.data?.msg);
      return rejectWithValue(error?.response?.msg);
    }
  }
);
//get access Token zalo normal
export const getAccessTokenZaloNormal = createAsyncThunk(
  "accessTokenZaloNormal/user",
  async (data, { rejectWithValue }) => {
    try {
      console.log("dataReq", data);
      const response = await userApi.getAccessTokenZaloNormal(data);
      console.log("response", response);
      localStorage.setItem(
        "userAccessTokenZalo",
        JSON.stringify(response.data.access_token)
      );
      localStorage.setItem(
        "userRefreshTokenZalo",
        JSON.stringify(response.data.refresh_token)
      );
      return response;
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
  initialState: {
    data: [],
    info: [],
  },
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
    [createAction.pending]: (state, action) => {
      state.loading = true;
      state.appError = undefined;
      state.serverError = undefined;
    },
    [createAction.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.appError = undefined;
      state.serverError = undefined;
    },
    [createAction.rejected]: (state, action) => {
      state.loading = false;
      state.appError = action?.payload;
      state.serverError = action?.error?.message;
    },
    [getAccessTokenZalo.pending]: (state, action) => {
      state.loading = true;
      state.appError = undefined;
      state.serverError = undefined;
    },
    [getAccessTokenZalo.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.appError = undefined;
      state.serverError = undefined;
    },
    [getAccessTokenZalo.rejected]: (state, action) => {
      state.loading = false;
      state.appError = action?.payload;
      state.serverError = action?.error?.message;
    },
    [getAccessTokenZaloNormal.pending]: (state, action) => {
      state.loading = true;
      state.appError = undefined;
      state.serverError = undefined;
    },
    [getAccessTokenZaloNormal.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.appError = undefined;
      state.serverError = undefined;
    },
    [getAccessTokenZaloNormal.rejected]: (state, action) => {
      state.loading = false;
      state.appError = action?.payload;
      state.serverError = action?.error?.message;
    },
    [getInfoZalo.pending]: (state, action) => {
      state.loading = true;
      state.appError = undefined;
      state.serverError = undefined;
    },
    [getInfoZalo.fulfilled]: (state, action) => {
      state.loading = false;
      state.info = action.payload;
      state.appError = undefined;
      state.serverError = undefined;
    },
    [getInfoZalo.rejected]: (state, action) => {
      state.loading = false;
      state.appError = action?.payload;
      state.serverError = action?.error?.message;
    },
  },
});

export const selectUsers = (state) => state?.users;

export default userSlice.reducer;
