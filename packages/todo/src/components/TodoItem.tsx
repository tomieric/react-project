export interface TodoItemProps {
  name: string
  btn?: String
  onConfirm?: () => void
}

export default function TodoItem(props: TodoItemProps = { name: '', btn: 'Done' }) {
  return (
    <div className="flex justify-between pl-3 mb-4">
      <span>{props.name}</span>
      <button
        className="
          border border-solid border-gray-200 rounded-md py-1 px-3 text-sm text-gray-700 select-none
          cursor-pointer
          hover:border-purple-300
          hover:bg-purple-50
          hover:text-purple-700
        "
        onClick={props.onConfirm}
      >{props.btn}</button>
    </div>
  )
}