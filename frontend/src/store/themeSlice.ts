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
            console.log('toggleTheme? ' + state.mode)
            localStorage.setItem("theme", state.mode);
            const body = document.querySelector("body");
            const inputs = document.querySelectorAll("input");
            if (state.mode === "dark") {
                body?.classList.remove("light");
                body?.classList.add("dark");
                inputs?.forEach((input) => {
                    input.classList.add("dark");
                    input.classList.remove("light");
                });
            } else {
                body?.classList.remove("dark");
                body?.classList.add("light");
                inputs?.forEach((input) => {
                    input.classList.remove("dark");
                    input?.classList.add("light");
                });
            }
        },
        setTheme(state, action) {
            state.mode = action.payload;
            console.log('set theme?', state.mode)
            localStorage.setItem("theme", action.payload);
            const body = document.querySelector("body");
            const inputs = document.querySelectorAll("input");
            if (action.payload === "dark") {
                body?.classList.remove("light");
                body?.classList.add("dark");
                inputs?.forEach((input) => {
                    input.classList.remove("light");
                    input.classList.add("dark");
                });
            } else {
                body?.classList.remove("dark");
                body?.classList.add("light");
                inputs?.forEach((input) => {
                    input.classList.remove("dark");
                    input.classList.add("light");
                });
            }
        }
    }
});


export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;