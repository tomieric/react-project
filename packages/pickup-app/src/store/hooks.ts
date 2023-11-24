import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '.'

export const useStoreDispatch: () => AppDispatch = useDispatch
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector