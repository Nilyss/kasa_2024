import './hostDetails.scss'

// types
import { ReactElement } from 'react'
import { HostType } from '../../utils/types/HostType.ts'

export default function HostDetails({datas}: {datas: HostType}): ReactElement {
  return (
    <div className={'hostWrapper'}>
      <div className={'hostName'}>
        <p>{datas.firstName}</p>
        <p>{datas.lastName}</p>
      </div>
      <figure>
        <img src={datas.picture} alt={'Host picture'} />
      </figure>
    </div>
  )
}
