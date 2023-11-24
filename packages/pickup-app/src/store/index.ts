import { configureStore } from '@reduxjs/toolkit'

import categoryReducer from './reducers/category'
import cartReducer from './reducers/cart'
import recordsReducer from './reducers/records'

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    cart: cartReducer,
    records: recordsReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
