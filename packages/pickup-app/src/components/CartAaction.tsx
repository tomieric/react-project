import { FC, MouseEvent, memo } from "react";

interface Props {
  value?: number
  onDec: (e: MouseEvent<HTMLElement>) => void
  onInc: (e: MouseEvent<HTMLElement>) => void
}

const CartAction: FC<Props> = memo((props) => {
  const count = props.value || 0

  return (
    <div className='cart-action'>
      { count > 0 && (<>
        <span className='icon-minus' onClick={props.onDec}></span>
        <span className='cart-action-count'>{props.value}</span>
        <span className='icon-plus' onClick={props.onInc}></span>
      </>)}
     
      { count === 0 && <span className='icon-cart active' onClick={props.onInc}></span> }
    </div>
  )
})

export default CartAction