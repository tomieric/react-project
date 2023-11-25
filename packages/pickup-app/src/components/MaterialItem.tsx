import { FC, useMemo } from "react";
import CartAction from "./CartAaction";
import { useStoreDispatch, useStoreSelector } from "@/store/hooks";
import { addCart, removeCart } from "@/store/reducers/cart";
import { Materials } from "@/types";
import { Toast } from "antd-mobile";
import { FrownOutline } from 'antd-mobile-icons'

export interface Props extends Materials {
  count?: number,
  showCount?: boolean
  showAction?: boolean
  showCountText?: boolean
}

const MaterialItem: FC<Props> = (props) => {
  const dispatch = useStoreDispatch()
  const cartObj = useStoreSelector(state => state.cart.cartObj)

  const count = useMemo(() => {
    return cartObj[props.id] ?? 0
  }, [cartObj])
  
  function onInc() {
    // 限制不超过库存
    // if (props.count === props.quantity) {
    //   Toast.show({
    //     icon: <FrownOutline />,
    //     content: '库存有限'
    //   })
    //   return
    // }
    if (count === 1) {
      Toast.show({
        icon: <FrownOutline />,
        content: '每次只能领取一件'
      })
      return
    }

    dispatch(addCart({
      id: props.id,
      title: props.title,
      image: props.image,
      quantity: props.quantity,
      count: count + 1
    }))
  }

  function onDec() {
    if (count && count > 0) {
      dispatch(removeCart({
        id: props.id,
        title: props.title,
        image: props.image,
        quantity: props.quantity,
        count: count - 1
      }))
    }
  }

  return (
    <div className='material-item'>
      <img src={ props.image } className='material-img' />
      <div className='material-content'>
        <div className='material-title'>{props.title}</div>
        { props.showCount && (
          <div className='material-count'>
            {props.showCountText !== false && <span>库存</span>} 
            <b>{props.quantity }</b> 
            件</div>
        ) }
      </div>
      { props.showAction !== false && <CartAction value={ count } onDec={onDec} onInc={onInc} /> }
    </div>
  )
}

export default MaterialItem