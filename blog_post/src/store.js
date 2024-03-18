import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./features/PostSlice.jsx";

export const store = configureStore({
    reducer: {
        posts: PostReducer
    }
})