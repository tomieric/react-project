import { Button, Badge, Popup, SafeArea } from "antd-mobile"
import { useState } from "react"
import classnames from 'classnames'
import { nanoid } from 'nanoid'
import dayjs from 'dayjs'

import Cart from "./Cart"
import { useStoreDispatch, useStoreSelector } from "@/store/hooks"
import { setOrdering } from "@/store/reducers/cart"
import { addRecords } from "@/store/reducers/records"

function SubmitBar() {
  const dispatch = useStoreDispatch()
  const materials = useStoreSelector(state => state.cart.list)
  const [cartVisible, setCartVisible] = useState(false)
  function showCart() {
    // if (!materials.length) {
    //   return
    // }
    setCartVisible(true)
  }
  function closeCart() {
    setCartVisible(false)
  }
  function toOrder() {
    dispatch(setOrdering(true))
    dispatch(addRecords({
      id: nanoid(8),
      date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      materials
    }))
  }

  return (
    <>
      <div className='submitbar'>
        <Badge
          content={materials.length > 0 ? materials.length : null}
          style={{'--right': '30%', '--top': '20%'}}
        >
          <div
            id="cart-icon"
            className={classnames(['icon-cart', materials.length > 0 && 'active'])}
            onClick={showCart}
          ></div>
        </Badge>
        <div className='submitbar-total'>已选 <b>{materials.length}</b> 件</div>
        <Button
          disabled={ materials.length === 0 }
          color='primary'
          shape='rounded'
          style={{minWidth: '150px'}}
          onClick={toOrder}
        >确认领取</Button>
      </div>
      <Popup 
        visible={cartVisible}
        bodyStyle={{
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px'
        }}
        onMaskClick={closeCart}
      >
        <Cart onClose={closeCart} />
        <SafeArea position='bottom' />
      </Popup>
    </>
  )
}

export default SubmitBar
