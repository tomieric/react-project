import { NavBar, List } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import './index.scss'

function Lookup() {
  const navigate = useNavigate()
  const onBack = () => {
    navigate(-1)
  }

  return (
    <>
      <NavBar onBack={onBack}>查询列表</NavBar>
      <List>
        <List.Item
          description='各类福利答疑'
          prefix={<img src='/images/fuli@2x.png' className='icon-img' />}
          onClick={() => {}}
        >福利</List.Item>
        <List.Item
          description='月度绩效'
          prefix={<img src='/images/jixiao@2x.png' className='icon-img' />}
          onClick={() => {}}
        >绩效</List.Item>
        <List.Item
          description='升职加薪'
          prefix={<img src='/images/jinsheng@2x.png' className='icon-img' />}
          onClick={() => {}}
        >晋升</List.Item>
        <List.Item
          description='其他疑问'
          prefix={<img src='/images/qita@2x.png' className='icon-img' />}
          onClick={() => {}}
        >自由提问</List.Item>
      </List>
    </>
  )
}

export default Lookup
