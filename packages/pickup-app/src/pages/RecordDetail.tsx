import { useNavigate, useParams } from 'react-router-dom'
import { ImageViewer, List, NavBar } from "antd-mobile"
import { FC, useEffect, useState } from "react"

import MaterialItem from '@/components/MaterialItem'
import { getRecords, useRecordSelector } from '@/store/reducers/records'
import { useStoreDispatch, useStoreSelector } from '@/store/hooks'

const RecordDetail: FC = () => {
  const navigate = useNavigate()
  const params = useParams()
  const dispatch = useStoreDispatch()

  const records = useStoreSelector(state => state.records.list)
  const recordMaterials = useStoreSelector(useRecordSelector(params.id!))

  const [image, setImage] = useState('')
  const [imageVisible, setImageVisible] = useState(false)

  function showImagePriview(image: string) {
    setImage(image)
    setImageVisible(true)
  }

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
              <MaterialItem
                {...material}
                quantity={material.count!}
                showCount={true}
                showAction={false}
                showCountText={false}
                showImagePriview={showImagePriview}
              />
            </List.Item>
          ))}
        </List>

        <ImageViewer image={image} visible={imageVisible} onClose={() => setImageVisible(false)}></ImageViewer>
      </main>
    </div>
  )
}

export default RecordDetail