"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { UserState } from "./userTypes";
const initialState: UserState = {
  value: 0,
  posts: [],
  comments: [],
  isLoading: false,
  userDetail: null,
  post: null,
  theme: "light",
};
export const getPosts = createAsyncThunk("user/get-posts", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
});
export const getUserDetail = createAsyncThunk("user/get-user-details", async (userId: number) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return response.data;
});
export const getPostComments = createAsyncThunk("user/get-post-comments", async (postId) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  return response.data;
});
export const getPost = createAsyncThunk("user/get-post", async (postId) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return response.data;
});
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loaderOn: (state) => {
      state.isLoading = true;
    },
    loaderOff: (state) => {
      state.isLoading = false;
    },
    themeChange: (state, action) => {
      state.theme = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = [...action.payload];
        state.isLoading = false;
      })
      .addCase(getPosts.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getUserDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserDetail.fulfilled, (state, action) => {
        state.userDetail = { ...action.payload };
        state.isLoading = false;
      })
      .addCase(getUserDetail.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getPostComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPostComments.fulfilled, (state, action) => {
        state.comments = [...action.payload];
        state.isLoading = false;
      })
      .addCase(getPostComments.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.post = { ...action.payload };
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { loaderOn, loaderOff, themeChange } = userSlice.actions;
export default userSlice.reducer;
