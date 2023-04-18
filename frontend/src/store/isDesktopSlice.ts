import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IsDesktopState {
    value: boolean;
}

const initialState: IsDesktopState = {
    value: true,
};

export const isDesktopSlice = createSlice({
    name: 'isDesktop',
    initialState,
    reducers: {
        setIsDesktop: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload;
        },
    },
});

export const { setIsDesktop } = isDesktopSlice.actions;

export default isDesktopSlice.reducer;
