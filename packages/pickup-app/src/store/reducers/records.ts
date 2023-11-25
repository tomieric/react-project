import { Materials, RecordData } from "@/types";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "..";
import * as api from '@/api/category'
import { clearCart } from "./cart";

interface State {
  list: RecordData[]
  state: boolean
}

const initialState: State = {
  list: [],
  state: false
}

const recordsSlice = createSlice({
  name: 'records',

  initialState,

  reducers: {
    setList: (state, action: PayloadAction<RecordData[]>) => {
      state.list = action.payload
    },
    createRecords: (state, action: PayloadAction < RecordData >) => {
      state.list.unshift(action.payload)
    },
    setState: (state, action: PayloadAction < boolean >) => {
      state.state = action.payload
    }
  }
})

export const useRecordSelector = (id: string): (state: RootState) => Materials[] => {
  return createSelector(
    (state: RootState) => state.records,
    (state: State) => {
      const record = state.list.find((record) => record.id === id)
      return record?.materials ?? []
    }
  )
}

export const {
  setList,
  setState,
  createRecords
} = recordsSlice.actions

export const getRecords = () => {
  return async(dispatch: AppDispatch) => {
    const { data } = await api.getRecords()
    dispatch(setList(data))
  }
}

export function addRecords(data: RecordData) {
  return async(dispatch: AppDispatch) => {
    dispatch(setState(true))
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(dispatch(createRecords(data)))
      }, 1500)
    })

    // 清空购物车
    dispatch(clearCart())
    dispatch(setState(false))
  }
}

export default recordsSlice.reducer