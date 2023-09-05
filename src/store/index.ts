import {configureStore} from '@reduxjs/toolkit'
import shopReduce from './modules/shop/reducers/shopSlice'
import userReducer from './modules/shop/reducers/userSlice'


const store = configureStore({
    reducer: {
        fakeShop: shopReduce,
        user: userReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store