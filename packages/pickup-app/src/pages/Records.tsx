import { useNavigate } from 'react-router-dom'
import { List, NavBar } from "antd-mobile"
import { MailFill } from 'antd-mobile-icons'
import { FC, useEffect } from "react"
import { useStoreSelector, useStoreDispatch } from '@/store/hooks'
import { getRecords } from '@/store/reducers/records'

const Records: FC = () => {
  const navigate = useNavigate()
  const dispatch = useStoreDispatch()
  const records = useStoreSelector(state => state.records.list)

  const goDetail = (id: string) => {
    navigate(`/records/${id}`)
  }

  useEffect(() => {
    if (!records.length)
      dispatch(getRecords())
  }, [records])

  return (
    <div className='app'>
      <NavBar
        style={{
          '--border-bottom': '1px var(--border-color) solid'
        }}
        onBack={()=> navigate(-1)}
      >领取记录</NavBar>
      <main className='records'>
        <List mode='card'>
          {records.map(record => (
            <List.Item
              key={record.id}
              prefix={
                <MailFill fontSize={20} color='var(--text-secondary)' />
              }
              description={<span>领取时间：{record.date}</span>}
              className='interactive'
              onClick={() => goDetail(record.id)}
            >
              {record.id}
            </List.Item>
          ))}
        </List>
      </main>
    </div>
  )
}

export default Records