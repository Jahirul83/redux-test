import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice';
// import logger from "redux-logger";
import logger from './middlewares/Logger';

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;