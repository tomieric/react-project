import { useEffect, useMemo, useState } from 'react'
import { NavBar, SideBar, SafeArea } from 'antd-mobile'
import { getAssetsURL } from '@/utils'
import { Category as ICategory } from '@/types'
import * as api from '@/api/category'
import '@/assets/styles/App.scss'

import SubmitBar from './components/SubmitBar'
import Order from './components/Order'
import Category from './components/Category'

function App() {
  const [activeKey, setActiveKey] = useState('1')

  const [categories, setCategories] = useState<ICategory[]>([])

  async function getCategories() {
    const result = await api.getCategories()
    setCategories(result.data)
  }

  useEffect(() => {
    getCategories()
  }, [])

  const materials = useMemo(() => {
    const result = categories.find(cate => cate.id == activeKey)
    return result?.categories ?? []
  }, [categories])

  return (
    <div className='app'>
      <SafeArea position='top' />
      <NavBar
        left={(<img src={ getAssetsURL('/images/logo.png') } className='logo' />)}
        backArrow={false}
        style={{
          '--border-bottom': '1px var(--border-color) solid'
        }}
      >
        物资领取平台
      </NavBar>
      <main className='container'>
        <SideBar activeKey={activeKey} onChange={setActiveKey}>
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
