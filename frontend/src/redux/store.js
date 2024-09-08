import { configureStore } from "@reduxjs/toolkit";
import templateSlice from "./slice/templateSlice";
import postSlice from "./slice/postSlice";

export const store = configureStore({
    reducer : {
        post : postSlice,
        template : templateSlice,
        
    }
})