import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import themeReducer from "./themeSlice";

const rootReducer = combineReducers({
    theme: themeReducer,
    // Add other reducers here
});

const makeStore = () =>
    configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV !== "production",
    });

export type RootState = ReturnType<typeof rootReducer>;

const reducer = (state: RootState, action: any) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload,
        };
    } else {
        return rootReducer(state, action);
    }
};

export const wrapper = createWrapper(makeStore, { debug: true });

export const store = makeStore();

export default store;