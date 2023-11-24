import { Category } from '@/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppDispatch } from '..'
import * as api from '@/api/category'

interface CategoryState {
  activeKey: string
  list: Category[]
}

const initialState: CategoryState = {
  activeKey: '',
  list: []
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<Category[]>) => {
      state.list = action.payload
      state.activeKey = `${action.payload[0]?.id}`
    },
    setActiveKey: (state, action: PayloadAction <CategoryState['activeKey']>) => {
      state.activeKey = action.payload
    }
  }
})

export const {
  setList,
  setActiveKey
} = categorySlice.actions

export const getCategories = () => {
  return async (dispatch: AppDispatch) => {
    const { data } = await api.getCategories()
    dispatch(setList(data))
  }
} 

export default categorySlice.reducer