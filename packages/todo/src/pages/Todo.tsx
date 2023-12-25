import TodoItem from "@/components/TodoItem"
import { useTodoStore } from "@/store"
import { FormEvent, KeyboardEvent, MouseEvent, useState } from "react"

export default function Todo() {
  const [todo, setTodo] = useState('')

  const { todos, finish, addTodo } = useTodoStore(state => ({
    todos: state.todos,
    finish: state.finish,
    addTodo: state.addTodo
  }))

  const renderTodos = () => {
    return todos.map((todo) => {
      return <TodoItem key={todo.id} name={todo.name} btn="Done" onConfirm={() => finish(todo.id)}  />
    })
  }

  const onAddTodo = (e: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>) => {
    if ((e.type === 'keyup' && (e as KeyboardEvent).key === 'Enter') || e.type === 'click') {
      addTodo(todo)
      setTodo('')
    }
  }

  const onInputChange = (e: FormEvent<HTMLInputElement>) => {
    setTodo(e.currentTarget.value)
  }

  return <div>
    {todos.length && <div>{renderTodos()}</div>}
    <div className="flex rounded-md">
      <input
        value={ todo }
        type="text"
        className="border border-solid border-gray-200 rounded-l-md px-3 py-1.5 flex-1 focus:outline-none"
        placeholder="todo"
        onChange={onInputChange}
        onKeyUp={onAddTodo}
      />
      <button
        className="border border-style rounded-none rounded-r-md px-4 border-purple-600 bg-purple-600 text-white select-none"
        onClick={onAddTodo}
      >Add</button>
    </div>
  </div>
}
