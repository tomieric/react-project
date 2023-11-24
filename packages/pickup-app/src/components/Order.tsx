import { FC } from "react"
import { Mask, Button } from "antd-mobile"
import { useStoreDispatch, useStoreSelector } from "@/store/hooks"
import { setOrdering } from "@/store/reducers/cart"

const Order:FC = () => {
  const dispatch = useStoreDispatch()
  const visible = useStoreSelector(state => state.cart.ordering)
  function closeModal() {
    dispatch(setOrdering(false))
  }
  return (
    <Mask visible={visible} onMaskClick={closeModal}>
      <div className='order-container'>
        <div className='order'>
          <div className='order-img'></div>
          <div className='order-content'>您的货品正在出货，请稍等片刻</div>
          <Button
            block={ true }
            color='primary'
            shape='rounded'
            onClick={closeModal}
          >确定</Button>
          </div>
      </div>
    </Mask>
  )
}

export default Order