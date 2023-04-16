import { createSlice } from "@reduxjs/toolkit";

type ThemeState = {
    mode: "dark" | "light";
};

const initialState: ThemeState = {
    mode: "light",
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme(state) {
            const body = document.querySelector("body");
            const inputs = document.querySelectorAll("input");
            state.mode = state.mode === "light" ? "dark" : "light";
            body?.classList.toggle("dark");
            inputs?.forEach((input) => {
                input.classList.toggle("dark");
            });
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
