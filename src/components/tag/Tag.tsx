// styles
import './tag.scss'

// types
import { ReactElement } from 'react'

export default function Tag(props: { tag: string }): ReactElement {
  return (
    <div className={'tag'}>
      <span>{props.tag}</span>
    </div>
  )
}
