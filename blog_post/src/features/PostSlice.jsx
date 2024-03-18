import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import {sub } from 'date-fns'
import axios from "axios";

const POSTS_URL = "./blogpost.json";
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try{
    const response = await axios.get(POSTS_URL);
    return [...response.data];
  }catch(err){
    return err.message;
  }
});

const initialState = {
    posts: [],
    status: 'idle',  // idle | loading | success | error
    error: null   
}

const PostSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
        addPost: {
            reducer(state, action){
                state.posts.push(action.payload)
            },
            prepare(id, title, user, image, content){
                return{
                    payload: {
                        id: id,
                        title: title,
                        user: user,
                        featuredImage: image,
                        content: content
                    }
                }
            }
        }
    },
    extraReducers(builder){
        builder
        .addCase(fetchPosts.pending, (state) => {
          state.status = 'loading' 
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
          state.status = 'success';
          state.posts = action.payload;
          })
        .addCase(fetchPosts.rejected, (state, action) => {
          state.status = 'error';
          state.error = action.error.message;
        });
      }

});

export const { addPost } = PostSlice.actions;
export const selectAllPosts = state=> state.posts.posts;
export const getPostsStatus = state=> state.posts.status;
export const getPostsError = state=> state.posts.error;
export default  PostSlice.reducer;