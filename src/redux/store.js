import { configureStore } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk"; // Import Redux Thunk
import authReducer from "./reducers/authReducer";
import taskReducer from "./reducers/taskReducer";
import practiceReducer from "./reducers/practiceReducer";

const store = configureStore({
    reducer: {
        auth: authReducer,  // Assigning reducer to a key
        task: taskReducer,
        reduxpractice: practiceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV !== 'production', // Enables Redux DevTools in dev mode
});

export default store;
