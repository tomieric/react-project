import { NavBar, List } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { getAssetsURL } from '../../utils'
import './index.scss'

function Lookup() {
  const navigate = useNavigate()
  const onBack = () => {
    navigate(-1)
  }
  const toQALink = (type) => {
    navigate(`/qa?type=${type}`)
  }

  return (
    <>
      <NavBar onBack={onBack}>查询列表</NavBar>
      <List>
        <List.Item
          description='各类福利答疑'
          prefix={<img src={getAssetsURL('/images/fuli@2x.png')} className='icon-img' />}
          onClick={() => toQALink(1)}
        >福利</List.Item>
        <List.Item
          description='月度绩效'
          prefix={<img src={getAssetsURL('/images/jixiao@2x.png')} className='icon-img' />}
          onClick={() => toQALink(2)}
        >绩效</List.Item>
        <List.Item
          description='升职加薪'
          prefix={<img src={getAssetsURL('/images/jinsheng@2x.png')} className='icon-img' />}
          onClick={() => toQALink(3)}
        >晋升</List.Item>
        <List.Item
          description='其他疑问'
          prefix={<img src={getAssetsURL('/images/qita@2x.png')} className='icon-img' />}
          onClick={() => toQALink(4)}
        >自由提问</List.Item>
      </List>
    </>
  )
}

export default Lookup
