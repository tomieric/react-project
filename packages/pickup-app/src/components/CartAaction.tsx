import { FC } from "react";

interface Props {
  value: number
  onDec: () => void
  onInc: () => void
}

const CartAction: FC<Props> = (props) => {
  return (
    <div className='cart-action'>
      { props.value > 0 && (<>
        <span className='icon-minus' onClick={props.onDec}></span>
        <span className='cart-action-count'>{props.value}</span>
        <span className='icon-plus' onClick={props.onInc}></span>
      </>)}
     
      { props.value === 0 && <span className='icon-cart active' onClick={props.onInc}></span> }
    </div>
  )
}

export default CartAction