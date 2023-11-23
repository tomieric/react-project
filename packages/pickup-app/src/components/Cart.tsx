import { Button } from "antd-mobile"
import Material from "./Material"

interface Props {
  onClose: () => void
}

function Cart(props: Props) {
  return (
    <div className='cart'>
      <header className='cart-header'>
        <div className='cart-header-m'>
          已选 <b>3</b> 件
        </div>
        <div className='cart-header-action interactive'>
          <i className='icon-empty'></i>
          <span>清空列表</span>
        </div>
      </header>
      <main className='cart-bd'>
        <Material />
      </main>
      <footer className='cart-footer'>
        <Button block={true} shape='rounded' onClick={props.onClose}>关闭</Button>
        <Button block={true} shape='rounded' color="primary">确认领取</Button>
      </footer>
    </div>
  )
}

export default Cart