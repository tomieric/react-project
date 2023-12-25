import { Link, Outlet, useLocation } from 'react-router-dom'
import { TODO, DONE } from '@/const'
import { useTodoStore } from '@/store'
import logo from '@/assets/react.svg'

export default function App() {
  const { todos, doneList } = useTodoStore(
    state => ({ todos: state.todos, doneList: state.doneList })
  )

  const location = useLocation()

  return <div className="max-w-screen-sm mx-8 sm:max-auto">
    <div className = "py-4 flex items-center justify-center">
      <img src={ logo } alt="React" />
      <span className="pl-2 text-cyan-400 text-lg">Zustand Todo</span>
    </div>
    <div className="border border-solid border-slate-200 rounded-lg overflow-hidden flex flex-col">
      <div className="bg-purple-600 px-6 py-4 text-white flex justify-between">
        <div>
          <Link
            to="todo"
            className={
              ["py-1 px-3 rounded-md text-white font-bold select-none no-underline", (location.pathname === '/todo' || location.pathname === '/') && 'bg-purple-800'].join(' ')
          }>{ TODO }</Link>
          <Link
            to="done"
            className={
              ["py-1 px-3 rounded-md text-white font-bold select-none no-underline", location.pathname === '/done' && 'bg-purple-800'].join(' ')
          }>{ DONE }</Link>
        </div>

        <div className="flex">
          <div className="flex items-center mr-4">
            <i className="i-ant-design-check-circle-outlined inline-flex"></i>
            <span className="ml-1">{todos.length}</span>
          </div>
          <div className="flex items-center">
            <i className="i-ant-design-check-circle-filled inline-flex"></i>
            <span className="ml-1">{doneList.length}</span>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 transition-all duration-300">
        <Outlet />
      </div>
    </div>
  </div>
}