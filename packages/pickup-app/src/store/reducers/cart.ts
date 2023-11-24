import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Materials } from '@/types'

interface CartMaterial extends Materials {
  count: number
}

interface CartState {
  list: CartMaterial[]
  ordering: boolean
}

const initialState: CartState = {
  list: [],
  ordering: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setOrdering(state, action: PayloadAction<boolean>) {
      state.ordering = action.payload
    },

    addCart: (state, action: PayloadAction<CartMaterial>) => {
      const cart = state.list.find((cart) => cart.id === action.payload.id)
      
      if (cart) {
        cart.count = action.payload.count
        return
      }

      state.list.push(action.payload)
    },
    removeCart: (state, action: PayloadAction < CartMaterial >) => {
      const cart = state.list.find(cart => cart.id === action.payload.id)
      if (cart) {
        // 减数量
        if (action.payload.count > 0) {
          cart.count = action.payload.count
        } else {
          // 移出购物车
          state.list = state.list.filter((cart) => cart.id !== action.payload.id)
        }
      }
    },
    clearCart: (state) => {
      state.list = []
    }
  }
})

export const { addCart, removeCart, clearCart, setOrdering } = cartSlice.actions

export default cartSlice.reducer
