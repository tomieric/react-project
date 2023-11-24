import { Materials, RecordData } from "@/types";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "..";
import * as api from '@/api/category'

interface State {
  list: RecordData[]
}

const initialState: State = {
  list: []
}

const recordsSlice = createSlice({
  name: 'records',

  initialState,

  reducers: {
    setList: (state, action: PayloadAction<RecordData[]>) => {
      state.list = action.payload
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
  setList
} = recordsSlice.actions

export const getRecords = () => {
  return async(dispatch: AppDispatch) => {
    const { data } = await api.getRecords()
    dispatch(setList(data))
  }
}

export default recordsSlice.reducer