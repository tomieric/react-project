import { FC } from "react"

import Material from './Material'
import { CategoryItem } from "@/types"

interface Props {
  data: CategoryItem[]
}

const Category: FC<Props> = (props) => {
  return (
    <div className='category'>
      { props.data?.map(item => (
        <div key={item.id}>
          <h2 className='category-header'>{item.name}</h2>
          <Material showCount={true} />
        </div>
      ))}
    </div>
  )
}

export default Category