import { FC } from "react"

import Material from './Material'
import { CategoryItem } from "@/types"
import { Divider, ErrorBlock } from "antd-mobile"
import { SearchOutline } from 'antd-mobile-icons'

interface Props {
  data: CategoryItem[]
}

const Category: FC<Props> = (props) => {
  return (
    <div className='category'>
      { props.data?.map(item => (
        <div key={item.id}>
          <h2 className='category-header'>{item.name}</h2>
          <Material showCount={true} data={item.materials} />
        </div>
      ))}
      { props.data.length > 0 && <Divider>没有更多了</Divider> }
      { props.data.length === 0 && <ErrorBlock image={<SearchOutline style={{fontSize: '48px', color: 'var(--text-placeholder)'}} />} status='empty' title='暂无数据' description='请查看其他分类吧' />}
    </div>
  )
}

export default Category