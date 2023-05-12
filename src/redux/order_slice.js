import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import config from '../config'

// Define the async thunk
export const fetchOrders = createAsyncThunk('orders/fetchOrder', async () => {
    const response = await axios.get(`${config.baseUrl}/order-controller`)
    return response.data.Orders
})

const initialState = {
    orders: [],
    status: 'idle',
    error: null
}

// Define the slice
const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add the fetched user to the state
                state.orders = action.payload
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

// Export the actions and the reducer
export default orderSlice.reducer



