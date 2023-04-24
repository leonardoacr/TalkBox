import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ConnectivityState = 'CONNECTED' | 'DISCONNECTED'

interface Connectivity {
    status: ConnectivityState
}

const initialState: Connectivity = {
    status: 'DISCONNECTED',
}

const connectivitySlice = createSlice({
    name: 'connectivity',
    initialState,
    reducers: {
        connected: (state) => {
            state.status = 'CONNECTED'
        },
        disconnected: (state) => {
            state.status = 'DISCONNECTED'
        },
    },
})

export const { connected, disconnected } = connectivitySlice.actions

export default connectivitySlice.reducer
