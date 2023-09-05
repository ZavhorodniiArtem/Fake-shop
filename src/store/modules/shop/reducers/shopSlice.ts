import {createSlice} from '@reduxjs/toolkit'
import {fetchShopSlice} from '../thunks'
import {InitialState} from '../types'


const state: InitialState = {
    shop: null,
    status: 'loading...',
    error: '',
    loading: false,
}

const shopSlice = createSlice({
    name: 'fakeShop',
    initialState: state,
    reducers: {},
    extraReducers: (builder) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        builder.addCase(fetchShopSlice.pending, (state) => {
            state.status = 'loading...'
            state.error = ''
            state.loading = true
        }),
            builder.addCase(fetchShopSlice.fulfilled, (state, action) => {
                state.status = 'resolved'
                state.shop = action.payload;
                state.loading = false
            }),
            builder.addCase(fetchShopSlice.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = <string>action.payload
            })
    }
})

export default shopSlice.reducer
export const fakeShopActions = shopSlice.actions