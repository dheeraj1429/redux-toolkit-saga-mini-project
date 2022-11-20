import { createSlice } from '@reduxjs/toolkit';

const INITAL_STATE = {
   blogs: null,
   blogFetchLoading: false,
   blogFetchError: null,
};

const blogSlice = createSlice({
   name: 'blog',
   initialState: INITAL_STATE,
   reducers: {
      fetchBlogs: (state, action) => {
         state.blogs = null;
         state.blogFetchLoading = true;
         state.blogFetchError = null;
      },
      getBlogs: (state, action) => {
         state.blogFetchError = null;
         state.blogFetchLoading = false;
         state.blogs = action.payload;
      },
   },
});

export const { fetchBlogs, getBlogs } = blogSlice.actions;
export default blogSlice;
