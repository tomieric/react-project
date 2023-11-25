import { FC } from "react"
import { useNavigate } from 'react-router-dom'
import { Mask, Button } from "antd-mobile"
import { useStoreDispatch, useStoreSelector } from "@/store/hooks"
import { setOrdering } from "@/store/reducers/cart"

const Order:FC = () => {
  const navigate = useNavigate()
  const dispatch = useStoreDispatch()
  const visible = useStoreSelector(state => state.cart.ordering)
  const orderState = useStoreSelector(state => state.records.state)
  
  function closeModal() {
    if (orderState) {
      return
    }
    dispatch(setOrdering(false))
    navigate('/records')
  }
  return (
    <Mask visible={visible} onMaskClick={closeModal}>
      <div className='order-container'>
        <div className='order'>
          <div className='order-img'></div>
          <div className='order-content'>{ orderState ? '您的货品正在出货，请稍等片刻' : '已出货，请及时取走' }</div>
          <Button
            block={ true }
            color='primary'
            shape='rounded'
            disabled={orderState}
            onClick={closeModal}
          >确定</Button>
          </div>
      </div>
    </Mask>
  )
}

export default Order