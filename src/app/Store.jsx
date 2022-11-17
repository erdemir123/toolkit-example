import AuthReducer from "../features/AuthSlice";
import PostReducer from "../features/PostSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer:{
        auth:AuthReducer,
        post:PostReducer,
    }
})