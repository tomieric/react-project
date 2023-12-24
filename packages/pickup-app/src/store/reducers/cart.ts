import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Materials } from '@/types'
import { AppDispatch } from '..'

interface CartMaterial extends Materials {
  count: number
}

type CartObj = {
  [key: string]: number
}

interface CartState {
  list: CartMaterial[]
  cartObj: CartObj
  ordering: boolean
}

const initialState: CartState = {
  list: [],
  cartObj: {},
  ordering: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setOrdering(state, action: PayloadAction<boolean>) {
      state.ordering = action.payload
    },
    updateCartData(state) {
      state.cartObj = state.list.reduce((result: CartObj, material: CartMaterial) => {
        if (material && material.id) {
          result[material.id] = material.count
        }
        return result
      }, {})
    },
    addCartBase: (state, action: PayloadAction<CartMaterial>) => {
      const cart = state.list.find((cart) => cart.id === action.payload.id)
      
      if (cart) {
        cart.count = action.payload.count
        return
      }

      state.list.push(action.payload)
    },
    removeCartBase: (state, action: PayloadAction < CartMaterial >) => {
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
    clearCartBase: (state) => {
      state.list = []
    }
  }
})

export const { addCartBase, removeCartBase, clearCartBase, setOrdering, updateCartData } = cartSlice.actions

// thunk
export const addCart = (material: CartMaterial) => {
  return async(dispatch: AppDispatch) => {
    dispatch(addCartBase(material))
    dispatch(updateCartData())
  }
}

export const removeCart = (material: CartMaterial) => {
  return async(dispatch: AppDispatch) => {
    dispatch(removeCartBase(material))
    dispatch(updateCartData())
  }
}

export const clearCart = () => {
  return async(dispatch: AppDispatch) => {
    dispatch(clearCartBase())
    dispatch(updateCartData())
  }
}

export default cartSlice.reducer
