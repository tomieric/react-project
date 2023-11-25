import { Button } from "antd-mobile"
import { nanoid } from 'nanoid'
import dayjs from 'dayjs'
import Material from "./Material"
import { useStoreDispatch, useStoreSelector } from "@/store/hooks"
import { clearCart, setOrdering } from "@/store/reducers/cart"
import { addRecords } from "@/store/reducers/records"

interface Props {
  onClose: () => void
}

function Cart(props: Props) {
  const dispatch = useStoreDispatch()
  const cartMaterials = useStoreSelector(state => state.cart.list)

  function emptyCart() {
    dispatch(clearCart())
    props.onClose()
  }
  
  function onConfirm() {
    props.onClose()
    dispatch(setOrdering(true))
    dispatch(addRecords({
      id: nanoid(8),
      date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      materials: cartMaterials
    }))
  }

  return (
    <div className='cart'>
      <header className='cart-header'>
        <div className='cart-header-m'>
          已选 <b>{cartMaterials.length}</b> 件
        </div>
        <div className='cart-header-action interactive' onClick={emptyCart}>
          <i className='icon-empty'></i>
          <span>清空列表</span>
        </div>
      </header>
      <main className='cart-bd'>
        <Material data={cartMaterials} />
      </main>
      <footer className='cart-footer'>
        <Button block={true} shape='rounded' onClick={props.onClose}>关闭</Button>
        <Button block={true} shape='rounded' color="primary" onClick={onConfirm}>确认领取</Button>
      </footer>
    </div>
  )
}

export default Cart