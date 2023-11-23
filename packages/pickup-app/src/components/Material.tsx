import { FC, useState } from "react";

import MaterialItem, { Props as ItemProps } from "./MaterialItem";

interface Props {
  showCount?: boolean
}


const Material: FC<Props> = (props) => {
  const [list] = useState<ItemProps[]>([{
    image: 'https://images.unsplash.com/photo-1668853060178-2d53667b7345?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    id: 1,
    title: '这是商品 1',
    quantity: 2,
  },{
    image: 'https://images.unsplash.com/photo-1531087131490-07836ca4341d?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    id: 11,
    title: '这是商品 2',
    quantity: 5,
  },{
    image: 'https://images.unsplash.com/photo-1531087131490-07836ca4341d?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    id: 12,
    title: '这是商品 2',
    quantity: 5,
  },{
    image: 'https://images.unsplash.com/photo-1531087131490-07836ca4341d?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    id: 13,
    title: '这是商品 2',
    quantity: 5,
  },{
    image: 'https://images.unsplash.com/photo-1531087131490-07836ca4341d?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    id: 4,
    title: '这是商品 2',
    quantity: 5,
  },{
    image: 'https://images.unsplash.com/photo-1531087131490-07836ca4341d?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    id: 44,
    title: '这是商品 2',
    quantity: 5,
  },{
    image: 'https://images.unsplash.com/photo-1531087131490-07836ca4341d?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    id: 15,
    title: '这是商品 2',
    quantity: 5,
  },{
    image: 'https://images.unsplash.com/photo-1531087131490-07836ca4341d?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    id: 65,
    title: '这是商品 2',
    quantity: 5,
  },{
    image: 'https://images.unsplash.com/photo-1531087131490-07836ca4341d?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    id: 171,
    title: '这是商品 2',
    quantity: 5,
  }])

  return (
    <ul className='material-list'>
      { list.map(row => <li key={ row.id }><MaterialItem {...row} showCount={props.showCount} /></li>)}
    </ul>
  )
}

export default Material