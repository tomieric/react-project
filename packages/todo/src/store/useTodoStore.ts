import { create } from 'zustand'
import { produce } from 'immer'

export interface TodoItem {
  id: number
  name: string
}

export interface TodoState {
  id: number,
  todos: TodoItem[]
  doneList: TodoItem[],
  addTodo: (name: string) => void
  finish: (id: number) => void
  remove: (id: number) => void
}

export const useTodoStore = create<TodoState>((set) => ({
  id: 5,
  todos: [
    {id: 2, name: 'react'},
    {id: 3, name: 'zustand'},
    {id: 4, name: 'immer'},
    {id: 5, name: 'react-router-dom'}
  ],
  doneList: [
    {id: 0, name: 'vite'},
    {id: 1, name: 'uno.css'}
  ],
  addTodo: (name: string) => set(
    produce((state: TodoState) => {
      if (name.trim() !== '') {
        state.todos.push({
          id: state.id + 1,
          name
        })
      }
    })
  ),
  finish: (id: number) => set(
    produce((state: TodoState) => {
      const index = state.todos.findIndex(todo => todo.id === id)
      if (index > -1) {
        const item = state.todos[index]
        if (item) state.doneList.push({ ...item })
        state.todos.splice(index, 1)
      }
    })
  ),
  remove: (id: number) => set(
    produce((state: TodoState) => {
      const index = state.doneList.findIndex(todo => todo.id === id)
      if (index > -1) {
        state.doneList.splice(index, 1)
        if (state.doneList.length === 0) {
          state.id = 0
        }
      }
    })
  )
}))