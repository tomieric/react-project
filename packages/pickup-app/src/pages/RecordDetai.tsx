import { useNavigate, useParams } from 'react-router-dom'
import { List, NavBar } from "antd-mobile"
import { FC, useEffect } from "react"

import MaterialItem from '@/components/MaterialItem'
import { getRecords, useRecordSelector } from '@/store/reducers/records'
import { useStoreDispatch, useStoreSelector } from '@/store/hooks'

const RecordDetail: FC = () => {
  const navigate = useNavigate()
  const params = useParams()
  const dispatch = useStoreDispatch()

  const records = useStoreSelector(state => state.records.list)
  const recordMaterials = useStoreSelector(useRecordSelector(params.id!))

  useEffect(() => {
    if (!records.length)
      dispatch(getRecords())
  }, [records, getRecords])

  return (
    <div className='app'>
      <NavBar
        style={{
          '--border-bottom': '1px var(--border-color) solid'
        }}
        onBack={()=> navigate(-1)}
      >{ params.id }</NavBar>
      <main className='records'>
        <List mode='card'>
          { recordMaterials.map(material => (
            <List.Item key={material.id}>
              <MaterialItem {...material} showCount={true} showAction={false} showCountText={false} />
            </List.Item>
          ))}
        </List>
      </main>
    </div>
  )
}

export default RecordDetail