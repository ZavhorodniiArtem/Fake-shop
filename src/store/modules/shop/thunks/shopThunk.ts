import {createAsyncThunk} from '@reduxjs/toolkit'

export const fetchShopSlice = createAsyncThunk<any>(
    'fakeShop/fetchShopSlice',
    async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API}`)
            const data = await response.json()
            return data
        } catch (error) {
            throw error

        }
    },
)