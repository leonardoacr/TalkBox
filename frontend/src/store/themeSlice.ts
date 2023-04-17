import { createSlice } from "@reduxjs/toolkit";

type ThemeState = {
    mode: "dark" | "light";
};


const initialState: ThemeState = {
    mode: 'dark',
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme(state) {
            state.mode = state.mode === "light" ? "dark" : "light";
            localStorage.setItem("theme", state.mode);
            const body = document.querySelector("body");
            const inputs = document.querySelectorAll("input");
            if (state.mode === "dark") {
                body?.classList.add("dark");
                inputs?.forEach((input) => {
                    input.classList.add("dark");
                });
            } else {
                body?.classList.remove("dark");
                inputs?.forEach((input) => {
                    input.classList.remove("dark");
                });
            }
        },
        setTheme(state, action) {
            state.mode = action.payload;
            localStorage.setItem("theme", action.payload);
            const body = document.querySelector("body");
            const inputs = document.querySelectorAll("input");
            if (action.payload === "dark") {
                body?.classList.add("dark");
                inputs?.forEach((input) => {
                    input.classList.add("dark");
                });
            } else {
                body?.classList.remove("dark");
                inputs?.forEach((input) => {
                    input.classList.remove("dark");
                });
            }
        }
    }
});


export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;