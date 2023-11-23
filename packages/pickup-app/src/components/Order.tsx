import { Mask, Button } from "antd-mobile"
import { FC, useState } from "react"

const Order:FC = () => {
  const [visible, setVisible] = useState(false)
  function closeModal() {
    setVisible(false)
  }
  return (
    <Mask visible={visible} onMaskClick={closeModal}>
      <div className='order-container'>
        <div className='order'>
          <div className='order-img'></div>
          <div className='order-content'>您的货品正在出货，请稍等片刻</div>
          <Button block={ true } color='primary' shape='rounded'>确定</Button>
          </div>
      </div>
    </Mask>
  )
}

export default Order