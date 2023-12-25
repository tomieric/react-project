import TodoItem from "@/components/TodoItem"
import { useTodoStore } from "@/store"

export default function Done() {
  const { todos, remove } = useTodoStore(state => ({ todos: state.doneList, remove: state.remove }))

  return <div>
    {todos.map((todo) => {
      return <TodoItem key={todo.id} name={todo.name} btn="Delete" onConfirm={() => remove(todo.id)}  />
    })}
  </div>
}
