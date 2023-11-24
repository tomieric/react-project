import { useEffect, useMemo } from 'react'
import { NavBar, SideBar, SafeArea } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { FileOutline } from 'antd-mobile-icons'
import { getAssetsURL } from '@/utils'
import { useStoreDispatch, useStoreSelector } from '@/store/hooks'
import { getCategories, setActiveKey } from '@/store/reducers/category'

import '@/assets/styles/App.scss'

import SubmitBar from './components/SubmitBar'
import Order from './components/Order'
import Category from './components/Category'

function App() {
  const navigate = useNavigate()
  // 默认选中第一个 tab
  const activeKey = useStoreSelector(state => state.category.activeKey)
  // 所有物资分类数据
  const categories = useStoreSelector(state => state.category.list)

  const dispatch = useStoreDispatch()

  function setActiveKeyAction (key: string){
    dispatch(setActiveKey(key))
  }

  // 初始化
  useEffect(() => {
    dispatch(getCategories())
  }, [])

  // 二级分类物资数据
  const materials = useMemo(() => {
    const result = categories.find(cate => cate.id == activeKey)
    return result?.categories ?? []
  }, [categories, activeKey])

  return (
    <div className='app'>
      <SafeArea position='top' />
      <NavBar
        left={(<img src={ getAssetsURL('/images/logo.png') } className='logo' />)}
        right={<FileOutline fontSize={18} color={`var(--text-placeholder)`} className='interactive' onClick={() => navigate('/records')} />}
        backArrow={false}
        style={{
          '--border-bottom': '1px var(--border-color) solid'
        }}
      >
        物资领取平台
      </NavBar>
      <main className='container'>
        <SideBar activeKey={activeKey} onChange={setActiveKeyAction}>
          {categories.map(cate => (<SideBar.Item key={cate.id} title={cate.name} />))}
        </SideBar>
        <Category data={materials} />
      </main>
      <SubmitBar />
      <Order />
      <SafeArea position='bottom' />
    </div>
  )
}

export default App
