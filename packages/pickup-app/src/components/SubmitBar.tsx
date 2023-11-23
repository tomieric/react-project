import { Button, Badge, Popup, SafeArea } from "antd-mobile"
import { useState } from "react"

import Cart from "./Cart"

function SubmitBar() {
  const [cartVisible, setCartVisible] = useState(false)
  function showCart() {
    setCartVisible(true)
  }
  function closeCart() {
    setCartVisible(false)
  }
  return (
    <>
      <div className='submitbar'>
        <Badge content='3' style={{'--right': '30%', '--top': '20%'}}>
          <div className='icon-cart active' onClick={showCart}></div>
        </Badge>
        <div className='submitbar-total'>已选 <b>3</b> 件</div>
        <Button color='primary' shape='rounded' style={{minWidth: '150px'}}>确认领取</Button>
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
