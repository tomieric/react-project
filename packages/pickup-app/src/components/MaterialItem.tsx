import { FC, useState } from "react";
import CartAction from "./CartAaction";

export interface Props {
  id: string | number
  title: string
  image: string
  quantity: number
  showCount?: boolean
}

const MaterialItem: FC<Props> = (props) => {
  const [value, setValue] = useState(0)
  
  function onInc() {
    setValue(value + 1)
  }

  function onDec() {
    if (value > 0) {
      setValue(value - 1)
    }
  }

  return (
    <div className='material-item'>
      <img src={ props.image } className='material-img' />
      <div className='material-content'>
        <div className='material-title'>{props.title}</div>
        { props.showCount && <div className='material-count'>库存 <b>{props.quantity }</b> 件</div> }
      </div>
      <CartAction value={ value } onDec={onDec} onInc={onInc} />
    </div>
  )
}

export default MaterialItem