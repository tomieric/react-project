import { FC } from "react";

import MaterialItem, { Props as ItemProps } from "./MaterialItem";

interface Props {
  showCount?: boolean
  showAction?: boolean
  data: ItemProps[]
}


const Material: FC<Props> = (props) => {
  return (
    <ul className='material-list'>
      { props.data.map(row => <li key={ row.id }><MaterialItem {...row} showCount={props.showCount} showAction={props.showAction} /></li>)}
    </ul>
  )
}

export default Material