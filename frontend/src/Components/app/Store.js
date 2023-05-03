import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../Feature/userSlice"

export default configureStore({
    reducer:{
        user: userReducer,
    },
})
